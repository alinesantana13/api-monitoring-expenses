const jwt = require('jsonwebtoken');
const knex = require('../dataBase/connection');

const authentication = async (req, res, next) => {
    const {authorization} = req.headers;

    if(!authentication){
        return res.status(401).json({message: "Unauthorized"});
    }

    const token = authorization.split(' ')[1];

    try {
        const {id} = jwt.verify(token, process.env.PASS_HASH);

        const user = await knex('users').where({id});

        if(user.length === 0){
            return res.status(401).json({message: "Unauthorized"});
        }

        const {password: _, ...useData} = user[0];

        req.user = useData;

        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
}

module.exports = authentication;