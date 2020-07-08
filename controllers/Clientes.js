const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.get('/v1/client', (req, res) => {
    
    database.select().table("client").orderBy("nome", "asc").then(data => {
        res.json(data);
    
    }).catch(err => {
        console.log(err);
        res.send("Error");
    
    });

});

router.post('/v1/client', (req, res) => {

    var dados = req.body;

    database.insert(dados).into("client").then(data => {
        console.log(data);
        res.send("Cadastrado com sucesso");
    
    }).catch(err => {
        console.log(err)
        res.send("Error");
    
    });

});

router.get('/v1/client', (req, res) => {
    
    var nome = req.body.nome;

    database.select([`${nome}`]).table("client").then(data => {
        console.log(data);
    
    }).catch(err => {
        console.log(data);
        res.send("Error");

    });

});

router.put('/v1/client/:id', (req, res) => {
    
    var id = req.params.id;
    var dados = req.body;

    database.where({ id: `${id}`}).update({

        nome: `${dados.nome}`, 
        telefone: `${dados.telefone}`, 
        email: `${dados.email}`, 
        endereco: `${dados.endereco}`,

    }).table("client").then(data => {
        console.log(data);
        res.send("Alterado com sucesso");

    }).catch(err => {
        console.log(err);
        res.send("Error");

    });
});

router.delete('/v1/client/:id', (req, res) => {
    
    var id = req.params.id;
    
    database.where({id: `${id}`}).delete().table("client").then(data => {
        console.log(data);
        res.send("Deletado com sucesso");

    }).catch(err => {
        console.log(err);
        res.send("Error");

    });

});


module.exports = router;