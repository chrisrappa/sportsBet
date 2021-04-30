import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util.js';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.send(orders);
});

router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({user: req.user._id});
  res.send(orders);
});


router.get("/:id", isAuth, async (req,res) => {
  const order = await Order.findOne({_id: req.params.id});
  if(order){
    res.send(order);
  } else {
    res.status(404).send("Order Not Found");
  }
})

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

router.post("/", isAuth, async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping,
      payment: req.body.payment,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    });
    const newOrderCreated = await newOrder.save();
    res.status(201).send({ message: "New Order Created", data: newOrderCreated });
  });

  router.put("/:id/pay", isAuth, async (req, res) => {

    // const {email} = req.body;
    // console.log(email);
    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount: 5000,
    //     currency: 'usd',
    //     // Verify your integration in this guide by including this parameter
    //     metadata: {integration_check: 'accept_a_payment'},
    //     receipt_email: email,
    //   });


    const order = await Order.findById(req.params.id);
    if (order){
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.email_address,
        };
      const updatedOrder = await order.save();
      // res.json({'client_secret': paymentIntent['client_secret']})
      res.send({message: 'Order Paid.', order: updatedOrder});
    } else {
      res.status(404).send({message: 'Order not found'});
    }
  
  });


export default router;