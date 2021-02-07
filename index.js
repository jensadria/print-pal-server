const express = require('express');
const products = require('./routes/products');
const orders = require('./routes/orders');

const app = express();
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/printpal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/products', products);
app.use('/api/orders', orders);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
