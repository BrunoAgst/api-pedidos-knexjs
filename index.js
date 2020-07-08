require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const clienteController = require('./controllers/Clientes');
const pedidoController = require('./controllers/Pedido');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(clienteController);
app.use(pedidoController);

app.listen(3000, () => {
    console.log("server running");
    
});