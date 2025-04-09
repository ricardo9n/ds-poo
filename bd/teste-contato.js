"use strict";

const Contato = require('./contato.js');

function test(){
    let c = new Contato("R1","r1@email.com","rua a",'01-01-1900');
    console.log(c);
}

test();