const db = require('../../data/dbConfig');

module.exports = {
    findAllUsers,
    findBy,
    findById,
    addUser
}

function findAllUsers(){
    return db('users')
}

function findBy(param){
    return db('users')
        .where(param)
        .first()
}
function findById(id){
    return db('users')
        .where({ id })
        .first()
}

async function addUser(user){
    const [id] = await db('users').insert(user, 'id');
    return findById(id)
}