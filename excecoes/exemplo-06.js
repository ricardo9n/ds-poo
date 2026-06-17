//exemplos-06.js
let {Conta} = require('./conta-v3');

function teste_exemplo_06(){
    console.log('=== exemplo_06 ===')
    minhaConta = new Conta();
    minhaConta.deposita(100);
    // minhaConta.saca(101);
    
    try{
        minhaConta.saca(102)
    }catch (excecao) {
        console.log('erro ao sacar!');
        console.log('============');
        // console.error(excecao);
        console.log('============');
    }
    
    console.log(minhaConta)
    console.log('=== fim exemplo_06 ===')
}

teste_exemplo_06();