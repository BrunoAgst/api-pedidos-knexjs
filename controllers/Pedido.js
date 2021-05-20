const express = require('express');
const router = express.Router();
const database = require('../database/database');
const verificaId = require('../function/verificaId');
const verificaBody = require('../function/verificaBody');

router.get('/v1/order', (req, res) => {

    database.select().table("client").innerJoin("order", "order.client_id", "client.id").then(data => {
        res.status(200);
        res.json(data);

    }).catch(err => {
        console.log(err);
        res.status(503);
        res.send("Erro");
    });
});

router.post('/v1/order/:id', async (req, res) => {

    var id = req.params.id;
    var body = req.body;
    
    if(!idClient){
        res.status(404);
        res.json("Erro cliente não encontrado");
        return;
    }
    
    var idClient = await verificaId(id);  
    var bodyClient = await verificaBody(body);


    if(bodyClient == false){
        res.status(404)
        res.json("Erro campo inválido");
        return;
    }


    database.insert({
        nome: body.nome, 
        descricao: body.descricao, 
        valor: body.valor, 
        client_id: idClient

    }).into("order").then(data => {
        res.status(200);
        res.json("Pedido cadastrado");

    }).catch(err => {
        console.log(err);
        res.status(503);
        res.json("Erro pedido não cadastrado");
    });
    
});

router.delete('/v1/order/:id', (req, res) => {

    var id = req.params.id;

    if(!id){
        res.status(404);
        res.send("ID inválido")
    }

    database.where({id: `${id}`}).delete().table("order").then(data => {
        res.status(200);
        res.json("Pedido Excluído");

    }).catch(err => {
        console.log(err);
        res.status(503);
        res.json("Erro pedido não deletado");
    
    });

});

module.exports = router;