const Joi = require('joi');
const mongoose = require('mongoose');

const Product = mongoose.model(
  'Product',
  new mongoose.Schema({
    id: { type: String, required: true, minlength: 5, maxlength: 50 },
    name: { type: String, required: true, minlength: 5, maxlength: 100 },
    brand: { type: String, required: true, minlength: 5, maxlength: 50 },
    colour: { type: String, required: true, minlength: 5, maxlength: 100 },
    gsm: { type: Number, required: true, min: 2, max: 5000 },
    noOutFlatSheet: {
      type: Number,
      required: true,
      min: 0,
      max: 2000,
    },
    packType: { type: String, required: true, minlength: 1, maxlength: 50 },
    packQty: { type: Number, required: true, min: 1, max: 5000 },
    bulkQty: { type: Number, required: true, min: 1, max: 5000 },
    stock: { type: Number, required: true, min: 1, max: 999999 },
    discontinued: {
      type: Boolean,
      default: false,
    },
    flatSheetCode: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    flatSheetStock: { type: Number, required: true, min: 1, max: 999999 },
    parentCode: { type: String, required: false },
    millPackSize: { type: Number, required: true, min: 1, max: 5000 },
    orders: { type: Array, required: false },
  })
);

function validateProduct(product) {
  const schema = Joi.object({
    id: Joi.string().min(5).max(50).required(),
    name: Joi.string().min(5).max(100).required(),
    brand: Joi.string().min(5).max(50).required(),
    colour: Joi.string().min(5).max(100).required(),
    gsm: Joi.number().min(2).max(5000).required(),
    noOutFlatSheet: Joi.number().min(0).max(2000).required(),
    packType: Joi.string().min(1).max(50).required(),
    packQty: Joi.number().min(1).max(5000).required(),
    bulkQty: Joi.number().min(1).max(5000).required(),
    stock: Joi.number().min(0).max(999999).required(),
    discontinued: Joi.boolean(),
    flatSheetCode: Joi.string().min(5).max(50).required(),
    flatSheetStock: Joi.number().min(0).max(999999).required(),
    parentCode: Joi.string().min(0).max(50),
    millPackSize: Joi.number().min(1).max(5000).required(),
    orders: Joi.array().allow(null).allow(''),
  });

  return schema.validate(product);
}

exports.Product = Product;
exports.validate = validateProduct;
