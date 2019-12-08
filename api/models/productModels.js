const db = require('../../data/dbConfig');

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
};

function getAllProducts(){
    return db('products')
};

function getProductById(id){
    return db('products')
        .where({ id })
        .first()
};

async function addProduct(products){
    const [id] = await db('products').insert(product, "id");
    return getProductById(id)
};

function deleteProduct(productId){
    return db('products')
        .where({ id: productId })
        .delete()
}

function updateProduct(productId, updated){
    return db('products')
        .where({ id: productId })
        .update(updated)
}