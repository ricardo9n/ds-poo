// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

function print(message) {
  console.log(message);
}

function printHtml(message) {
  document.writeln(message + "<br />");
}

const readline = require("readline-sync");

function prompt(text) {
  return readline.question(text + " ");
}

export { print, prompt, printHtml };
