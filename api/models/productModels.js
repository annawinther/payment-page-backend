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
        .join("users", "users.id", "products.user_id")
        .groupBy("products.id", "products.name", "products.description", "products.currency", "products.price")
        .select(
        "products.id",
        "products.name",
        "products.description",
        "products.currency",
        "products.price"
        )
        // .where({ user_id: userID })   
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