const Joi = require('joi');
const mongoose = require('mongoose');

const Order = mongoose.model(
  'Order',
  new mongoose.Schema({
    productId: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: false,
    },
    dueTime: {
      type: String,
      required: false,
    },
    petNumber: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    packs: {
      type: Number,
      required: true,
      min: 0,
      max: 5000,
    },
    bulks: {
      type: Number,
      required: false,
      min: 0,
      max: 5000,
    },
    cut: {
      type: Boolean,
      default: false,
    },
    packed: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  })
);

function validateOrder(order) {
  const schema = Joi.object({
    productId: Joi.string().min(3).max(20),
    dueDate: Joi.string().min(0).max(50).allow(null),
    dueTime: Joi.string().min(0).max(50).allow(null),
    petNumber: Joi.string().min(5).max(20),
    packs: Joi.number().min(0).max(5000).required(),
    bulks: Joi.number().min(0).max(5000).required(),
    cut: Joi.boolean(),
    packed: Joi.boolean(),
    completed: Joi.boolean(),
  });

  return schema.validate(order);
}

exports.Order = Order;
exports.validate = validateOrder;
