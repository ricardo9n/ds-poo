const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x ;

readline.question(`What's your name?`, name => {
  x = name;
  console.log(`Hi ${name}!`);
  readline.close();
});

console.log('hi again', x);