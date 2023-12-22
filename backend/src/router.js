const express = require('express');
const registerUser = require('./controllers/users/registerUser');

const router = express();

router.get('/login', (req, res)=>{
    res.send("Olá");
});

router.post('/register', registerUser);

module.exports = router;