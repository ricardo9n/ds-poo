const ConnectionFactory = require('./connection-factory');

const { sql_create_table, 
        sql_drop_table, 
        sql_insert,
        sql_lista_todos,
        open_connection,
        create_table_contatos,
        drop_table_contatos,
        inserir_contato,
        inserir_contato_com_ps,
        lista_contatos,
        close} = require('./functions');

const Contato = require('./contato');
const { data_para_str, imprime_contato } = require('./util');

function teste_cria_tabela(){
  let fabrica = new ConnectionFactory();
  let conexao = fabrica.open();

  create_table_contatos(conexao, sql_create_table);
  fabrica.end();
}

function teste_remove_tabela(){
  let fabrica = new ConnectionFactory();
  let conexao = fabrica.open();
  
  drop_table_contatos(conexao, sql_drop_table);
  fabrica.end();
}

function novo_contato(){
  let aleatorio = Math.floor(Math.random()*100);
  let agora = data_para_str(new Date());

  let contato = new Contato(`usuario ${aleatorio} `,`c${aleatorio}@ifal`,"rua a",agora);
  return contato;
}

function teste_insere_dados(){
  let fabrica = new ConnectionFactory();
  let conexao = fabrica.open();

  let contato = novo_contato();

  callback_inserir = (r)=>{console.log('dados inseridos com sucesso!')}
  inserir_contato(conexao, contato, callback_inserir );

  fabrica.end();
}

function teste_insere_dados_com_ps(){
  let fabrica = new ConnectionFactory();
  let conexao = fabrica.open();

  let contato = novo_contato();

  callback_inserir = (r)=>{console.log('dados inseridos com sucesso!')}

  inserir_contato_com_ps(conexao, contato, callback_inserir );

  fabrica.end();
}

function teste_consulta_dados(){
  let fabrica = new ConnectionFactory();
  let conexao = fabrica.open();

  let aleatorio = Math.floor(Math.random()*100);
  let agora = data_para_str(new Date());

  let contato = new Contato(`usuario ${aleatorio} `,`c${aleatorio}@ifal`,"rua a",agora);

  let callback_consulta = 
    (resultado,fields)=> { 
        console.log(`id\tnome\temail\tendereco\tdata_nasc`) ; 
        for(contato of resultado){
          imprime_contato(contato);
        }
    };
  lista_contatos(conexao, "select * from contatos;", callback_consulta );

  fabrica.end();
}

function teste_tudo(){
  let fabrica = new ConnectionFactory();
  let conexao = fabrica.open();

  let aleatorio = Math.floor(Math.random()*100);
  let agora = data_para_str(new Date());

  let contato = new Contato(`usuario ${aleatorio} `,`c${aleatorio}@ifal`,"rua a",agora);

  let con = open_connection(`mysqsl://user:pass@localhost:3306/db`);

  // create_table_contatos(con, sql_create_table);

  callback_inserir = (r)=>{console.log('dados inseridos com sucesso!')}
  inserir_contato(conexao, contato, callback_inserir );

  let callback_consulta = 
    (resultado,fields)=> { 
        console.log(`id\tnome\temail\tendereco\tdata_nasc`) ; 
        for(contato of resultado){
          imprime_contato(contato);
        }
    };
  lista_contatos(con, "select * from contatos;", callback_consulta );

  // drop_table_contatos(con, sql_drop_table);

  fabrica.end();
}

// teste_tudo();
// teste_cria_tabela();
// teste_insere_dados();
teste_insere_dados_com_ps();
// teste_consulta_dados();
// teste_remove_tabela();