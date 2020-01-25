const express = require('express');
const cors = require('cors');
const authRouter = require('../api/routes/authRoutes');
const productsRouter = require('../api/routes/productRoutes');
const server = express();

server.use(express.json());
server.use(cors())
server.use('/api/auth', authRouter);
server.use('/api/products', productsRouter);

server.get('/', (req, res) => {
    res.status(200).json("Welcome to the Paymentpage API")
})

module.exports = server;


