const knex = require('../../dataBase/connection');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) =>{
    const {name, surname, email, password, birth_date} = req.body;

    if (!name || !surname || !email || !password || !birth_date){
        return res.status(400).json({message: 'All fields are mandatory'});
    }

    try {
        const userEmail = await knex('users').where({email});

        if (userEmail.length === 1){
            return res.status(400).json({message: 'Email already registered' });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        await knex('users').insert({name, surname, email, password: encryptedPassword, birth_date});

        return res.status(201).json({message: 'User created'});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal server errror'});
    }
};

module.exports = registerUser;