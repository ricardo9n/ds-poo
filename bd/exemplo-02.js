"use strict";

// arquivo: exemplo-02.js

// Importando o módulo mysql2
const mysql = require('mysql2');

const { data_para_str, imprime_contato } = require('./util');

function open_connection(){
  console.log("conectando...");
  // Configurações de conexão com o banco de dados
  const connection = mysql.createConnection({
    host: 'localhost',     // Endereço do banco de dados
    user: 'user',   // Nome de usuário do banco de dados
    password: 'pass', // Senha do banco de dados
    database: 'db' // Nome do banco de dados
  });

  // Conectando ao banco de dados
  connection.connect(
    function(err) {
      if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
      }
      console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
    }
  );

  return connection
}


function create_table_contatos(con){
  console.log('=====================')
  console.log("criando tabela contatos...");
  const sql_create_table = `  create table db.contatos (
                                id BIGINT NOT NULL AUTO_INCREMENT,
                                nome VARCHAR(255),
                                email VARCHAR(255),
                                endereco VARCHAR(255),
                                data_nasc DATETIME,
                                primary key (id)
                              );`

  // Executando consultas ou outras operações aqui...
  
  // Exemplo de consulta
  con.query(sql_create_table, 
    function(err, results, fields) {
      if (err) {
        console.error('Erro ao criar tabela: ' + err);
        return;
      }
      console.log('Resultado create table: ', results, fields);
    }
  );
  console.log('=====================CTC')
}



function callback_erro(err, results, fields) {
  if (err) {
    console.error('Erro: ' + err);
    return;
  }
  
  // if (results) console.log("[RESULTS]: ",results);
  // if (fields) console.log("[FIELDS]: ",fields);
}

function drop_table_contatos(con){
  console.log('=====================')
  console.log("apagando tabela contatos...");
  const sql = `drop table contatos;`
  con.query(sql, callback_erro );
  console.log('=====================DTC')
}


function inserir_contato1(con){
  console.log('=====================ic1')
  console.log("inserindo contatos1...");
  const sql1 = `insert into contatos('nome','email','endereco','data_nasc') 
                   values('user1','user1@email.com','R. A 1','31-01-2000');`
  con.query(sql1, callback_erro );
  console.log('=====================IC1')
}

function inserir_contato2(con){
  console.log('=====================ic2')
  console.log("inserindo contatos2...");
  const sql2 = `insert into contatos(nome,email,endereco,data_nasc) 
                   values('user2','user2@email.com','R. B',01-31-2000);`
  con.query(sql2, callback_erro );
  console.log('=====================IC2')
}

function inserir_contato3(con){
  console.log('=====================ic3')
  console.log("inserindo contatos3...");
  const sql3 = `insert into contatos(nome,email,endereco,data_nasc) 
                values('user3','user3@email.com','R. C','2000-01-31');`
  con.query(sql3, callback_erro );
  console.log('=====================IC3')
}

// data_para_str = (data) => data.toISOString().slice(0,19) ;

function inserir_contato4(con){
  console.log('=====================ic4')
  console.log("inserindo contatos4...");
  let agora = data_para_str(new Date());
  const sql4 = `insert into contatos(nome,email,endereco,data_nasc) values('user4','user4@email.com','R. A 1','${agora}');`
  con.query(sql4, callback_erro );
  console.log('=====================IC3')
}

function consulta_contatos(con){
  console.log('=====================cc')
  console.log("consulta contatos...");
  const sql2 = `select * from contatos;`
  con.query(sql2, 
    function(err, results, fields){
      if (err) {
        console.error('Erro: ' + err.stack);
        return;
      }
      console.log('consulta realizada com sucesso')
      if (results) {
        for (let linha of results)
          // console.log(linha);
          imprime_contato(linha);
      }
    }
  );
  console.log('=====================CC')
}

function close(con){
  console.log('=====================')
  console.log("fechando conexao...");
  con.end( callback_erro );
  console.log('=====================C')
}

function recorta_string(strint,i,f){
  let result = '';
  for(let cont=i;i<f;cont++){
    result += strint[cont];
  }
  return result;
}

console.log('=====================')
let conexao = open_connection();
// create_table_contatos(conexao);
// drop_table_contatos(conexao);
inserir_contato1(conexao);
inserir_contato2(conexao);
inserir_contato3(conexao);
inserir_contato4(conexao);
consulta_contatos(conexao);
// drop_table_contatos(conexao);
close(conexao);
console.log('=====================M')
