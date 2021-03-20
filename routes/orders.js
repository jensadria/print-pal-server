const { Order, validate, validatePatch } = require('../models/order');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.find().sort('productId');
  res.send(orders);
});
router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.send(order);
});

// router.get('/active-orders/', async (req, res) => {
//   const activeOrders = await Order.find({ completed: false });
//   res.send(activeOrders);
// });
// router.get('/active-orders/:prodId', async (req, res) => {
//   const activeOrdersByProdId = await Order.find({
//     productId: req.params.prodId,
//   });
//   res.send(activeOrdersByProdId);
// });

// router.get('/finished-orders/', async (req, res) => {
//   const finishedOrders = await Order.find({ completed: true });
//   res.send(finishedOrders);
// });

// router.post('/', async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let order = new Order({
//     productId: req.body.productId,
//     dueDate: req.body.dueDate,
//     dueTime: req.body.dueTime,
//     petNumber: req.body.petNumber,
//     packs: req.body.packs,
//     bulks: req.body.bulks,
//     cut: req.body.cut,
//     packed: req.body.packed,
//     completed: req.body.completed,
//   });
//   order = await order.save();

//   res.send(order);
// });

// router.patch('/:id', async (req, res) => {
//   const { error } = validatePatch(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const order = await Order.findByIdAndUpdate(
//     req.params.id,
//     {
//       dueDate: req.body.dueDate,
//       dueTime: req.body.dueTime,
//       packs: req.body.packs,
//       bulks: req.body.bulks,
//       cut: req.body.cut,
//       packed: req.body.packed,
//       completed: req.body.completed,
//     },
//     { new: true }
//   );

//   if (!order)
//     return res.status(404).send('The order with the given ID was not found.');

//   res.send(order);
// });

// router.delete('/:id', async (req, res) => {
//   const order = await Order.findByIdAndRemove(req.params.id);

//   if (!order)
//     return res
//       .status(404)
//       .send('The customer with the given ID was not found.');

//   res.send(order);
// });

module.exports = router;
