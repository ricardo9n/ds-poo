//exemplos-04.js
let {Conta} = require('./conta-v2');

caixaEletronico = {
    emite(valor){
        console.log(`valor sacado: ${valor}`);
    }
}

function teste_exemplo_04(){
    console.log('=== exemplo_04 ===')
    minhaConta = new Conta();
    minhaConta.deposita(100);

    // ...
    valor = 5000;
    minhaConta.saca(valor); // vai retornar false, mas ninguém verifica!
    caixaEletronico.emite(valor);
    console.log('=== fim exemplo_04 ===')
}

teste_exemplo_04();