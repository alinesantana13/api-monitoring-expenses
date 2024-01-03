const express = require('express');
const registerUser = require('./controllers/users/registerUser');
const login = require('./controllers/users/login');
const authentication = require('./middleware/authentication');
const multer = require('./middleware/multer');
const registerExpense = require('./controllers/expenses/registerExpense');
const validateRequestBody = require('./middleware/validateRequestBody');
const schemaRegisterUser = require('./schemas/schemaRegisterUser');
const schemaLogin = require('./schemas/schemaLogin');
const schemaRegisterExpense = require('./schemas/schemaRegisterExpense');
const listExpenses = require('./controllers/expenses/listExpenses');


const router = express();

router.post('/register', validateRequestBody(schemaRegisterUser), registerUser);
router.post('/login', validateRequestBody(schemaLogin), login);

router.use(authentication);

router.post('/expenses', multer.single('image'), validateRequestBody(schemaRegisterExpense), registerExpense);

router.get('/expenses', listExpenses);

module.exports = router;