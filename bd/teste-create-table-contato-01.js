// arquivo: teste-insere-contato-bd-01.js

// Importar a classe ConnectionFactory e a biblioteca mysql2
const ConnectionFactory = require('./connection-factory');
const Contato = require('./contato')

const mysql = require('mysql2');

// Função para inserir dados na tabela de contatos
function createTableContato() {
    // Criar uma instância da ConnectionFactory
    const connectionFactory = new ConnectionFactory();
    // Estabelecer a conexão com o banco de dados
    const connection = connectionFactory.open();

    try {
        // Query SQL para inserir um novo contato
        const sql = 'INSERT INTO contatos (nome, email, endereco, data_nascimento) VALUES (?, ?, ?, ?)';
        // Parâmetros para a query SQL
        const values = [contato.nome, contato.email, contato.endereco, contato.dataNascimento];
        
        // Executar a query SQL
        let result = connection.query(sql, values);
        //const [rows, fields] = result
        //result=Object.keys(result)
        result=""
        console.log('Contato inserido com sucesso!', result);
    } catch (error) {
        console.error('Erro ao inserir contato:', error.stack);
    } finally {
        // Fechar a conexão com o banco de dados
        connection.end();
        // ConnectionFactory.end();
    }
}

// Criar um novo contato
const novoContato1 = new Contato('Fulano', 'fulano@example.com', 'Rua ABC, 123', '1995-01-01');
const novoContato2 = new Contato('Beltrano', 'beltrano@example.com', 'Rua DE, 789', '1998-10-10');

// Inserir o novo contato no banco de dados
inserirContato(novoContato1);
inserirContato(novoContato2);
