const express = require('express');
const cors = require('cors');
const authRouter = require('../api/routes/authRoutes');

const server = express();

server.use(express.json());
server.use(cors())
server.use('/api', authRouter);

server.get('/', (req, res) => {
    res.status(200).json("Server running")
})

module.exports = server;


