let {Conta} = require('./conta-v2');

console.log("inicio do main");
funcao1();
console.log("fim do main");

function funcao1() {
    console.log("inicio do funcao1");
    funcao2();
    console.log("fim do funcao1");
}

function funcao2() {
    console.log("inicio do funcao2");
    cc = new Conta();
    for (let i = 0; i <= 15; i++) {   
        try{
            cc.deposita(i + 1000);
            if (i == 5) {
                cc = null;
            }
        }catch(e){
            console.log("erro: " + e);
        }
    }
    console.log("fim do funcao2");
}
//teste-erro-03.js