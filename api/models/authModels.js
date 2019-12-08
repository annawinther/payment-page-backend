const db = require('../../data/dbConfig');

module.exports = {
    findAllUsers,
    findBy,
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

async function addUser(user){
    const [id] = await db('users').insert(user, 'id');
    return findById(id)
}