const knex = require('../../dataBase/connection');
const {uploadFile} = require('../../services/storage');

const registerExpense = async (req, res) => {
    const {user} = req;
    const {name, date, value, category_id, description} = req.body;
    const {file} = req;

    try {
        const expense = await knex('expenses').insert({
            user_id: user.id,
            name,
            date,
            value,
            category_id,
            description
        }).returning('*');

        if(file){
            const image = await uploadFile(
                `expenses/${expense[0].id}/${file.originalname}`,
                file.buffer,
                file.mimetype
            );

            await knex('expenses')
            .update({image: image.url})
            .where({id: expense[0].id, user_id: user.id})
        }

        const showExpense = await knex('expenses').where({id: expense[0].id, user_id: user.id }).returning('*');

        return res.status(201).json(showExpense[0]);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = registerExpense;