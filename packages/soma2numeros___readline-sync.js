//teste

/* 
- instalação: npm install -g readline-sync
- variável de ambiente necessária: NODE_PATH
	- execute npm -g root e veja o resultado
	- set NODE_PATH='resultado de npm -g root'
*/

// don't change this...it makes a better prompt
// --------------------------------------------
const readline = require("readline-sync");
const prompt = (text) => readline.question(text + " ");
// ============================================

x = parseInt(prompt("digite um numero: "));
y = parseInt(prompt("digite outro numero: "));
console.log(x + y);
