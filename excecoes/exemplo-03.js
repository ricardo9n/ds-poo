//exemplos-03.js
let {Conta} = require('./conta-v2');

function teste_exemplo_03(){
    console.log('=== exemplo_03 ===')
    minhaConta = new Conta();
    minhaConta.deposita(100);
    if (!minhaConta.saca(1000)) {
        console.log("Não saquei");
    }else{
        console.log("saquei");
    }
    console.log(minhaConta)
    console.log('=== fim exemplo_03 ===')
}

teste_exemplo_03();