const express = require('express');
const dotenv = require('dotenv');
const products = require('./routes/products');
const orders = require('./routes/orders');
const cors = require('cors');

//Load config
dotenv.config({ path: './config/config.env' });

const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://jensa:Jensa@printpal.ab8ok.mongodb.net/PrintPal?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...'));

app.use(cors());
app.use(express.json());
app.use('/api/products', products);
app.use('/api/orders', orders);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
