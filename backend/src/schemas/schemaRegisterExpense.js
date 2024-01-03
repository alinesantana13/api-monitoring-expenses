const joi = require('joi');

const schemaRegisterExpense = joi.object({
    name: joi.string().required().messages({
        'any.required': 'The name field is mandatory',
        'string.empty': 'The name field is mandatory'
    }),
    date: joi.string().required().messages({
        'any.required': 'The date field is mandatory',
        'string.empty': 'The date field is mandatory'
    }),
    value: joi.number().positive().required().messages({
        'number.base': 'The value must be a number',
        'number.positive': 'The value must be a positive number',
    }),
    category_id: joi.number().required().messages({
        'number.base': 'The category_id must be a number',
    }),
    description: joi.string().allow(null, ''),
    image: joi.string().allow(null, '')
});

module.exports = schemaRegisterExpense;