const prompt = require("prompt-sync")({ sigint: true });
const age1 = prompt("How old are you? ");
console.log(`You are ${age1} years old.`);
const age2 = prompt("How old are you? ");
console.log(`You are ${age2} years old.`);