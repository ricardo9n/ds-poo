"use strict";

// arquivo: functions.js

// Importando o módulo mysql2
const mysql = require('mysql2');
const Contato = require('./contato');
const ConnectionFactory = require('./connection-factory');
const { data_para_str, imprime_contato } = require('./util');

//////////////////////////////////////////////////////////
const sql_create_table = `  create table db.contatos (
                                id BIGINT NOT NULL AUTO_INCREMENT,
                                nome VARCHAR(255),
                                email VARCHAR(255),
                                endereco VARCHAR(255),
                                data_nasc DATETIME,
                                primary key (id)
                              );`

const sql_drop_table = `drop table contatos;`
const sql_insert_ps = `insert into contatos(nome,email,endereco,data_nasc) values(?,?,?,?);`
const sql_lista_todos = `select * from contatos;`

//////////////////////////////////////////////////////////

function open_connection(){
  console.log("conectando...");
  let fabrica = new ConnectionFactory();
  const connection = fabrica.open();

  connection.connect(
    function(err) {
      if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
      }
      console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
    }
  );

  return connection;
}

function create_table_contatos(con, sql){
  console.log('=====================')
  console.log("criando tabela contatos...");
  con.query(sql, 
    function(err, results, fields) {
      if (err) {
        console.error('Erro ao criar tabela: ' + err);
        return;
      }
      console.log("tabela criada com sucesso");
    }
  );
  console.log('=====================CTC')
}

function drop_table_contatos(con, sql){
  console.log('=====================')
  console.log("apagando tabela contatos...");
  con.query(sql, function(err) {
      if (err)
        console.error('Erro ao apagar tabela: ' + err);
    } );
  console.log('=====================DTC')
}

function sql_insere_contato(cont){
    return `insert into contatos(nome,email,endereco,data_nasc) 
                values('${cont.nome}','${cont.email}','${cont.endereco}','${cont.dataNascimento}');`
}


function inserir_contato(con, contato, callback){
  console.log('=====================ic4')
  console.log("inserindo contatos4...");
  let sql3 = sql_insere_contato(contato);
  con.query(sql3, 
    function(err, results, fields){
      if (err) {
        console.error('Erro Inserir: ' + err);
        return;
      }
      callback(results);
    });
  console.log('=====================IC3')
}

function inserir_contato_com_ps(conexao, contato, callback_inserir){
  //sql_insert_ps = `insert into contatos(nome,email,endereco,data_nasc) values(?,?,?,?);`
  let sql3 = sql_insert_ps;

  // let dados = [contato.nome, contato.email, contato.endereco, contato.dataNascimento]
  let dados = contato.toArray();

  let callback_exec = function(err, results, fields){
      if (err) {
        console.error('Erro Inserir: ' + err);
        return;
      }
      callback_inserir(results);
  }
  conexao.execute(sql3, dados, callback_exec );
}

function lista_contatos(con, sql2, callback){
  console.log('=====================cc')
  console.log("consulta contatos...");
  con.query(sql2, 
    function(err, results, fields){
      if (err) {
        console.error('Erro: ' + err);
        return;
      }
      callback(results, fields);
    });
  console.log('=====================CC')
}

function close(con){
  console.log('=====================')
  console.log("fechando conexao...");
  con.end(     
    function(err, results, fields){
      if (err) {
        console.error('Erro: ' + err);
        return;
      }
    });
  console.log('=====================C')
}

////////////////

module.exports = {  sql_create_table, sql_drop_table, 
                    sql_insert_ps, sql_lista_todos,
                    open_connection,create_table_contatos,
                    drop_table_contatos,
                    inserir_contato,inserir_contato_com_ps,
                    lista_contatos,close}


// module.exports = open_connection
// module.exports = sql_create_table
// module.exports = sql_drop_table
// module.exports = sql_insert
// module.exports = sql_lista_todos
// module.exports = drop_table_contatos
// module.exports = inserir_contato
// module.exports = lista_contatos
// module.exports = close
// module.exports = create_table_contatos