require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const clienteController = require('./controllers/Clientes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(clienteController);

app.listen(3000, () => {
    console.log("server running");
    
});