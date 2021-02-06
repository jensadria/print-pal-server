const Joi = require('joi');
const mongoose = require('mongoose');

const Order = mongoose.model(
  'Order',
  new mongoose.Schema({
    dueDate: {
      type: Date,
      required: fale,
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
  })
);

function validateOrder(order) {
  const schema = {
    dueDate: Joi.date(),
    dueTime: Joi.time(),
    petNumber: Joi.string().min(5).max(20).required(),
    packs: Joi.Number().min(0).max(5000).required(),
    bulks: Joi.Number().min(0).max(5000).required(),
  };

  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validate = validateOrder;
