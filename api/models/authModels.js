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
        .select(
            'users.id',
            'users.name',
            'users.email',
            'users.created_at',
            'users.stripe_user_id',
            'users.stripe_public_key',
            'users.refresh_token',
            'users.access_token'
        )
        .where({ id })
        .first()
}

async function addUser(user){
    const [id] = await db('users').insert(user, 'id');
    return findById(id)
}