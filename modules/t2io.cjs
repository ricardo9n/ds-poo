const readline = require("readline-sync");

function prompt(text) {
  return readline.question(text + ":");
}

let algo = prompt("digite algo");
console.log(algo);
