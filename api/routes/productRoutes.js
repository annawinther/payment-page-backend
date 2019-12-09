const router = require('express').Router();
const Products = require('../models/productModels');

router.get('/', (req, res) => {
    Products.getAllProducts()
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = router;