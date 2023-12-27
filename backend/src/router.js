const express = require('express');
const registerUser = require('./controllers/users/registerUser');
const login = require('./controllers/users/login');

const router = express();

router.get('/login', (req, res)=>{
    res.send("Olá");
});

router.post('/register', registerUser);
router.post('/login', login);

module.exports = router;