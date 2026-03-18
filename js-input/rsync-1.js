// don't change this...it makes a better prompt
// --------------------------------------------
const readline = require("readline-sync");
const prompt = (text) => readline.question(text + " ");
// ============================================

x = prompt("digite algo");
console.log(x);
