//exemplos-02.js
let {Conta} = require('./conta-v1');

function teste_exemplo_02(){
    console.log('=== exemplo_02 ===')
    minhaConta = new Conta();
    minhaConta.deposita(100);
    minhaConta.saca(1000);
    console.log('=== exemplo_02 ===')
}

teste_exemplo_02();