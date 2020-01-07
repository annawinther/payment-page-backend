const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/authModels');
const secrets = require('../../config/secrets');

router.post('/register', async (req, res) => {
    let { name, password, email } = req.body;

    if(!email || !password || !name){
        return res.status(404).json({
            error: "`email`, `name` and `password` are required when signing up!"
        })
    }
    const hash = bcrypt.hashSync(password, 10);
    const newUser = {
        email: req.body.email,
        name: req.body.name,
        password: hash
    };
    try {
        const users = await Users.addUser(newUser)
        res.status(201).json({users})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// router.post('/login', async (req, res) => {
//     let { name, password } = req.body;

//     try {
//         const user = await Users.findBy(name)
//         if (user && bcrypt.compareSync(password, user.password)){
//             const token = generateToken(user);
//             res.status(200).json({ 
//                 message: `Welcome ${user.name}. You're logged in!`,
//                 token: token
//             });
//         }else {
//             res.status(401).json({ message: 'Invalid credentials' })
//         };
//     } catch (error){
//         res.status(500).json({ message: 'could not log in this user' })
//     }
// });
router.post('/login',  (req, res) => {
    let { name, password } = req.body;
   
    Users.findBy({ name })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `Welcome ${user.name}. You're logged in!`,
                    token: token
                })
            } else {
                res.status(401).json({ message: 'Invalid credentials' })
            }
        })
        .catch(() => {
            res.status(500).json({ message: 'could not log in this user' })
        })
});

function generateToken(user){
    const payload = {
        sub: user.id,
        name: user.name
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
};

module.exports = router;