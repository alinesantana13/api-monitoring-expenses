const knex = require('../../dataBase/connection');

const listExpenses = async (req, res) =>{
    const {user} = req;
    const {name} = req.query;

    try {
        if(name){
            const filterByName = await knex('expenses').where({user_id: user.id, name});

            return res.status(200).json(filterByName);
        }

        const list = await knex('expenses').where({user_id: user.id});

        return res.status(200).json(list);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: "Internal server errror"});
    }
}

module.exports = listExpenses;