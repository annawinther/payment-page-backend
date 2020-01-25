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
        .select("products.id",
        "products.name",
        "products.description",
        "products.currency",
        "products.price")
        .where({ id })
        .first()
};

function addProduct(product){
    return db('products')
        .insert(product)
        .then(ids => getProductById(ids[0]))
    // return "lol"
};
// function addProduct(product){
//     return BroadcastChannel('products').insert(product, "id")
//         .then(ids => {
//             const [id]
//         })
// }

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