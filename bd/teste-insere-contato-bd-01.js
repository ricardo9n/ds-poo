// arquivo: teste-insere-contato-bd-01.js

// Importar a classe ConnectionFactory e a biblioteca mysql2
const db_functions = require('./functions');
const Contato = require('./Contato');

// Criar um novo contato
const novoContato1 = new Contato('Fulano', 'fulano@example.com', 'Rua ABC, 123', '1995-01-01');
const novoContato2 = new Contato('Beltrano', 'beltrano@example.com', 'Rua DE, 789', '1998-10-10');

// Inserir o novo contato no banco de dados
db_functions.inserirContato2(novoContato1);
db_functions.inserirContato2(novoContato2);
