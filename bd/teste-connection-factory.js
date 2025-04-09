"use strict";

//arquivo: teste-connection-factory.js

// Importando a classe ConnectionFactory
const ConnectionFactory = require('./connection-factory');

function testeConexao1(){
    // Criando uma instância da ConnectionFactory
    const connectionFactory = new ConnectionFactory();

    // Testando a conexão com o banco de dados
    connectionFactory.open();

    // Simulando uma operação no banco de dados
    setTimeout(
        function() {
            // Encerrando a conexão com o banco de dados após 5 segundos
            connectionFactory.end();
        }, 2000);
}

function testeConexao2(){
    const conFactory2 = new ConnectionFactory('localhost','user','pass','db');
    conFactory2.open();
    setTimeout( ()=>{
        conFactory2.end();
    }, 1000);
}


function testeConexao3(){
    const conFactory3 = new ConnectionFactory('localhostx','user','pass','db');
    conFactory3.open();
    conFactory3.end();
}

// testeConexao1();
// testeConexao2();
testeConexao3();