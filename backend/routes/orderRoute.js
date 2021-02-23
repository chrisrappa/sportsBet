import express from 'express';
import Order from '../models/orderModel';

const router = express.Router();

router.post("/", async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
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

export default router;