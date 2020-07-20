const database = require('../database/database');

async function verificaId(id){
    
    return database.select().where({id: `${id}`}).table("client").then(async data => {
        return await data[0].id;

    }).catch(err => {
        return err;

    });

}

module.exports = verificaId;