"use strict";

// arquivo: connection-factory.js

// Importando o módulo mysql2
const mysql = require('mysql2');

class ConnectionFactory {

    constructor(host='localhost',user='user',pass='pass',database='db',url=undefined) {
        console.log("creating factory");
        this.connection = mysql.createConnection({
            host: host,     // Endereço do banco de dados
            user: user,     // Nome de usuário do banco de dados
            password: pass, // Senha do banco de dados
            database: database   // Nome do banco de dados
        });

    }

    open() {
        this.connection.connect(function(err) {
            console.log('connecting...')
            if (err) {
                console.error('Erro ao conectar ao banco de dados: ' + err.stack);
                return;
            }
            console.log('Conexão bem-sucedida');
        });
        return this.connection;
    }

    end() {
        this.connection.end(function(err) {
            if (err) {
                console.error('Erro ao encerrar conexão com o banco de dados: ' + err.stack);
                return;
            }
            console.log('Conexão encerrada.');
        });
    }
}

module.exports = ConnectionFactory;
