//exemplo-01.js
let {Conta} = require('./conta-v1');

function teste_exemplo_01(){
    console.log('=== exemplo_01 ===')
    c1 = new Conta();
    c1.deposita(100);
    c1.saca(200);
    console.log(c1);
    //if (savou-com-sucesso)
    console.log('=== exemplo_01 ===')
}

teste_exemplo_01();
