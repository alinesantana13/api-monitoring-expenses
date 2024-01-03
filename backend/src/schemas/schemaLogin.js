const joi = require('joi');

const schemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'any.required': 'The email field is mandatory',
        'string.empty': 'The email field is mandatory',
        'string.email': 'The email must be in a valid format'
    }),
    password: joi.string().required().messages({
        'any.required': 'The password field is mandatory',
        'string.empty': 'The password name field is mandatory'
    })
});

module.exports = schemaLogin;