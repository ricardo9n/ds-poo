//exemplos-07.js
let {Conta} = require('./conta-v4');

function teste_exemplo_06(){
    console.log('=== exemplo_07 ===')
    minhaConta = new Conta();
    minhaConta.deposita(100);
    // minhaConta.saca(101);
    
    try {
        minhaConta.saca(102)
    }catch (excecao) {
        console.log('erro ao sacar!');
        console.log('============');
        console.error(excecao);
        console.log('============');
        console.error("mensagem: ",excecao.message);
        console.log('============');
    }
    
    console.log(minhaConta)
    console.log('=== fim exemplo_07 ===')
}

teste_exemplo_06();