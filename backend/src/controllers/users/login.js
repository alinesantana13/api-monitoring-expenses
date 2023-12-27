const knex = require('../../dataBase/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) =>{
    const {email, password} = req.body;

    try {
        const user = await knex('users').where({email});

        if(user.length === 0){
            return res.status(400).json({message: 'Incorrect email or password.'});
        }

        const comparePassword = await bcrypt.compare(password, user[0].password);

        if(!comparePassword){
            return res.status(400).json({message: 'Incorrect email or password.'});
        }

        const token = await jwt.sign({id: user[0].id}, process.env.PASS_HASH, {expiresIn: '8h'});

        const {password: _,...userData} = user[0];

        return res.status(200).json({user: userData, token});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Internal server errror'});
    }
}

module.exports = login;