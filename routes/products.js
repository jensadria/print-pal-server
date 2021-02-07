const { Product, validate } = require('../models/product');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find().sort('id');
  res.send(products);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = new Product({
    id: req.body.id,
    name: req.body.name,
    brand: req.body.brand,
    colour: req.body.colour,
    gsm: req.body.gsm,
    noOutFlatSheet: req.body.noOutFlatSheet,
    packType: req.body.packType,
    packQty: req.body.packQty,
    bulkQty: req.body.bulkQty,
    stock: req.body.stock,
    discontinued: req.body.discontinued,
    flatSheetCode: req.body.flatSheetCode,
    flatSheetStock: req.body.flatSheetStock,
    parentCode: req.body.parentCode,
    millPackSize: req.body.millPackSize,
  });
  product = await product.save();

  res.send(product);
});

module.exports = router;
