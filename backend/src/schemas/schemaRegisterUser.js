const joi = require('joi');

const schemaRegisterUser = joi.object({
    name: joi.string().required().messages({
        'any.required': 'The name field is mandatory',
        'string.empty': 'The name field is mandatory'
    }),
    surname: joi.string().required().messages({
        'any.required': 'The surname field is mandatory',
        'string.empty': 'The surname field is mandatory'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'The email field is mandatory',
        'string.empty': 'The email field is mandatory',
        'string.email': 'The email must be in a valid format'
    }),
    password: joi.string().required().messages({
        'any.required': 'The password field is mandatory',
        'string.empty': 'The password name field is mandatory'
    }),
    birth_date: joi.string().required().messages({
        'any.required': 'The birth date field is mandatory',
        'string.empty': 'The birth date name field is mandatory'
    })
});

module.exports = schemaRegisterUser;