const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.get('/v1/client', (req, res) => {
    
    database.select().table("client").orderBy("nome", "asc").then(data => {
        res.status(200);
        res.json(data);
    
    }).catch(err => {
        console.log(err);
        res.status(503);
        res.send("Error");
    
    });

});

router.post('/v1/client', (req, res) => {

    var dados = req.body;

    database.insert(dados).into("client").then(data => {
        res.status(200);
        res.send("Cadastrado com sucesso");
    
    }).catch(err => {
        console.log(err);
        res.status(503);
        res.send("Error");
    
    });

});

router.get('/v1/client', (req, res) => {
    
    var nome = req.body.nome;

    database.select([`${nome}`]).table("client").then(data => {
        res.status(200);
        res.json(data);
    
    }).catch(err => {
        console.log(err);
        res.status(503);
        res.send("Error");
        

    });

});

router.put('/v1/client/:id', (req, res) => {
    
    var id = req.params.id;
    var dados = req.body;

    if(!id){
        res.status(404);
        res.send("Id não informado");
        return
    }

    database.where({ id: `${id}`}).update({

        nome: `${dados.nome}`, 
        telefone: `${dados.telefone}`, 
        email: `${dados.email}`, 
        endereco: `${dados.endereco}`,

    }).table("client").then(data => {
        res.status(200);
        res.send("Alterado com sucesso");

    }).catch(err => {
        console.log(err);
        res.status(503);
        res.send("Error");

    });
});

router.delete('/v1/client/:id', (req, res) => {
    
    var id = req.params.id;
    
    database.where({id: `${id}`}).delete().table("client").then(data => {
        res.status(200);
        res.send("Deletado com sucesso");

    }).catch(err => {
        console.log(err);
        res.status(503);
        res.send("Error");

    });

});

module.exports = router;