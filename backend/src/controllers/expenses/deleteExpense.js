const knex = require('../../dataBase/connection');
const {deleteImage} = require('../../services/storage');

const deleteExpense = async (req, res) => {
    const {id} = req.params;
    const {user} = req;

    try {
        const expense = await knex('expenses').where({user_id: user.id, id}).first();

        if(!expense){
            return res.status(404).json({message: "Expense not found"});
        }

        if(expense.image !== null){
            await deleteImage(expense.image);
        }

        const deleteExpense = await knex('expenses').where({user_id: user.id, id}).del();

        if (!deleteExpense){
            return res.status(404).json({message: "It was not possible to exclude the expense"});
        }

        return res.status(204).json();

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: "Internal server errror"});
    }
}

module.exports = deleteExpense;
