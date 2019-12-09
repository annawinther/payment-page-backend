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
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Products.getProductById(id)
        .then(product => {
            res.status(200).json({ product })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
});

router.post('/', (req, res) => {
    
   Products.addProduct(req.body)
    .then(product => {
        res.status(201).json({ product })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router;