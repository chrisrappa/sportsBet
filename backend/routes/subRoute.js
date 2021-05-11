import express from 'express';
import Sub from '../models/orderModel';
import { isAuth, isAdmin } from '../util.js';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const subs = await Sub.find({}).populate('user');
  res.send(subs);
});

router.get("/:id", isAuth, async (req,res) => {
  const sub = await Sub.findOne({_id: req.params.id});
  if(sub){
    res.send(sub);
  } else {
    res.status(404).send("Sub Not Found");
  }
})


router.post("/", isAuth, async (req, res) => {
    const newSub = new Sub({
      subItems: req.body.orderItems,
      user: req.user._id,
      shipping: req.body.shipping,
      payment: req.body.payment,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
    });
    const newSubCreated = await newSub.save();
    res.status(201).send({ message: "New Sub Created", data: newSubCreated });
  });

  router.put("/sub", isAuth, async (req, res) => {
    const sub = await sub.findById(req.params.id);
    if (sub){
      sub.isPaid = true;
      sub.paidAt = Date.now();
      sub.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.email_address,
        };
      const updatedSub = await sub.save();
      // res.json({'client_secret': paymentIntent['client_secret']})
      res.send({message: 'Sub Paid.', sub: updatedSub});
    } else {
      res.status(404).send({message: 'Sub not found'});
    }
  
  });


export default router;