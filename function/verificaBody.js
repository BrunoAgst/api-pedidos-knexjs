function verifyBody(body){
    
    var nome = body.nome;
    var descricao = body.descricao;
    var valor = body.valor;
    
    if(typeof nome === "string" && nome.length > 0){

        if(typeof descricao === "string" || descricao.length == 0){

            if(typeof valor === "number"){
                return true;

            }        
            return false;
            
        }
        return false;
        
    }
    return false;
    
}

module.exports = verifyBody;