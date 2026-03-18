import readline from "/C:/Users/Ricardo/AppData/Roaming/npm/node_modules/readline-sync/lib/readline-sync.js";

function prompt(text) {
  return readline.question(text + " ");
}

let algo = prompt("digite algo");
console.log(algo);
