"use strict";

// arquivo: exemplo-01.js

// Importando o módulo mysql2
const mysql = require('mysql2'); //1

const config = { //2
  host: 'localhost',     // Endereço do banco de dados
  user: 'root',   // Nome de usuário do banco de dados
  password: 'admin', // Senha do banco de dados
  database: 'db' // Nome do banco de dados
}

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection(
  config
);

const callback = function(err) {   //4
    if (err) {
      console.error('Erro ao conectar ao banco de dados: ' + err.stack);
      return;
    }
    console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
  }

// Conectando ao banco de dados
connection.connect( //3
  callback
);

//...
  
// Encerrando a conexão após a conclusão das operações
connection.end(
  function(err) {
    if (err) {
      console.error('Erro ao encerrar conexão com o banco de dados: ' + err.stack);
      return;
    }
    console.log('Conexão encerrada.');
  }
);
