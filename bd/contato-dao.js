"use strict";

//arquivo contato-dao.js
const mysql = require('mysql2');
const Contato = require('./contato');
const ConnectionFactory = require('./connection-factory');

const { create_table_contatos,drop_table_contatos } = require('./functions');

class ContatoDAO {

    static sql_create_table = `  create table db.contatos (
                                id BIGINT NOT NULL AUTO_INCREMENT,
                                nome VARCHAR(255),
                                email VARCHAR(255),
                                endereco VARCHAR(255),
                                data_nasc DATETIME,
                                primary key (id)
                              );`

    static sql_drop_table = `drop table contatos;`

    constructor() {
        this.connection = new ConnectionFactory().open();
    }

    close(){
        this.connection.end();
    }

    criar_tabela(){
          create_table_contatos(this.connection, ContatoDAO.sql_create_table);
    }

    remover_tabela(){
          drop_table_contatos(this.connection, ContatoDAO.sql_drop_table);
    }

    adicionar1(contato, callback) {
        const sql = "INSERT INTO contatos (nome, email, endereco, data_nasc) VALUES (?, ?, ?, ?)";
        this.connection.execute(sql, [contato.nome, contato.email, contato.endereco, contato.dataNascimento], 
        	function(err, results, fields) {
            if (err) {
                callback(err, null); //#
            } else {
                callback(null, results);
            }
        });
    }

    adicionar2(contato, callback) {
        const sql1 = `INSERT INTO contatos (nome, email, endereco, data_nasc) 
        							VALUES ('${contato.nome}', '${contato.email}', 
        									'${contato.endereco}', '${contato.dataNascimento}')`;

        this.connection.query(sql1, 
        	function(err1, results1, fields1) { 
            if (err1) callback(err1, null);
            else      callback(null, results1);

        });
    }

    listar(callback) {
        const sql2 = "SELECT * FROM contatos";

        this.connection.query(sql2, 
        	function(err2, results2, fields2) {
            if (err2) 
                callback(err2, null);
            else { //#1
                
                const contatos = results2.map(row => {
                    return Contato.fromArray(row);
                });
                // console.log(fields2, contatos);
                callback(null, contatos);
            }
        });
    }

    atualizar(id, novoContato, callback) {
        const sql3 = "UPDATE contatos SET nome = ?, email = ?, endereco = ?, dataNascimento = ? WHERE id = ?";
        this.connection.execute(sql3, [novoContato.nome, novoContato.email, novoContato.endereco, novoContato.dataNascimento, id], 
        	function(err3, results3, fields3) {
            if (err3) {
                callback(err3, null);
            } else {
                callback(null, results3);
            }
        });
    }

    deletar(id, callback) {
        const sql5 = "DELETE FROM contatos WHERE id = ?";
        this.connection.execute(sql5, [id], 
        	function(err5, results5, fields5) {
            if (err5) {
                callback(err5, null);
            } else 
                callback(null, results5);
        });
    }
}

module.exports = ContatoDAO;
