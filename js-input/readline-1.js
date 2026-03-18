var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite algo: ", function(answer) {
    var resp = answer;
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});

console.log('>',resp);

leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual módulo pra ler dados no node.js?", function(answer) {
    var resp = answer;
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});

console.log('>',resp);