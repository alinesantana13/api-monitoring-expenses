require('dotenv').config();
const express = require('express');
const router = require('./router');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.listen(process.env.PORT, () =>{
    console.log('Servidor inicializado na porta 3000')
});