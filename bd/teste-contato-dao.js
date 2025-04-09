"use strict";

//arquivo: teste-contato-dao.js

const Contato = require('./contato');
const ContatoDAO = require('./contato-dao');
const { data_para_str, imprime_contato } = require('./util');

const { sql_create_table, 
        sql_drop_table, 
        open_connection,
        close,
        create_table_contatos,
        drop_table_contatos,
} = require('./functions');

const print = console.log

function cb_default(e,r){
	if (e) print(e)
	else print("Ok!")
}

function novo_contato(){
  let aleatorio = Math.floor(Math.random()*100);
  let agora = data_para_str(new Date());
  let contato = new Contato(`usuario ${aleatorio} `,`c${aleatorio}@ifal`,"rua a",agora);
  return contato;
}

function callback_listar(err,contatos) { 
  if (err){ print("erro"); return;}
  for(let contato of contatos){
    imprime_contato(contato);
  }
}

function main(){
  let contato = novo_contato();
	let contatoDAO = new ContatoDAO();

  contatoDAO.criar_tabela();

	contatoDAO.adicionar1(contato, cb_default);
	contatoDAO.adicionar2(contato, cb_default);
	contatoDAO.listar(callback_listar);
	contatoDAO.remover_tabela();
	contatoDAO.close();
}

main();