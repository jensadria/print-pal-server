const { Order, validate } = require('../models/order');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.find().sort('productId');
  res.send(orders);
});
router.get('/active-orders/', async (req, res) => {
  const activeOrders = await Order.find({ completed: false });
  res.send(activeOrders);
});
router.get('/active-orders/:prodId', async (req, res) => {
  const activeOrdersByProdId = await Order.find({
    productId: req.params.prodId,
  });
  res.send(activeOrdersByProdId);
});

router.get('/finished-orders/', async (req, res) => {
  const finishedOrders = await Order.find({ completed: true });
  res.send(finishedOrders);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let order = new Order({
    productId: req.body.productId,
    dueDate: req.body.dueDate,
    dueTime: req.body.dueTime,
    petNumber: req.body.petNumber,
    packs: req.body.packs,
    bulks: req.body.bulks,
    cut: req.body.cut,
    packed: req.body.packed,
    completed: req.body.completed,
  });
  order = await order.save();

  res.send(order);
});

module.exports = router;
