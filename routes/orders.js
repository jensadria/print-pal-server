const { Order, validate } = require('../models/order');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.find().sort('productId');
  res.send(orders);
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
