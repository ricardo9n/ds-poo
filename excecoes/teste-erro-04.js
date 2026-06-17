function exemplo_01(){
  let i = 5571;
  i = i / 0;
  console.log("O resultado  " + i);

  let j = 10 * "abc";
  console.log("Resultado:", j);
  
  let k = 42;
  k.toUpperCase(); 
}

const fs = require('fs');

function le_arquivo1() {
    console.log('abrindo arquivo.txt')
    const stream = fs.createReadStream('arquivo.txt');

    // Adiciona um evento de erro ao ReadStream
    stream.on('error', (err) => {
      // console.error('Erro ao tentar abrir o arquivo:', err);
    });
}

function le_arquivo2() {
    try {
        fs.createReadStream('arquivo.txt');
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.log('Não foi possível abrir o arquivo para leitura');
        } else {
            console.log('Erro ao tentar abrir o arquivo:', e.message);
        }
    }
}

function le_arquivo3() {
  try {
    console.log('abrindo arquivo.txt')
    const stream = fs.createReadStream('arquivo.txt');

    // Adiciona um evento de erro ao ReadStream
    stream.on('error', (err) => {
      //console.error('Erro ao tentar abrir o arquivo:', err);
    });
  } catch (e) {
    console.error('Erro ao tentar abrir o arquivo:', e);
  }
  console.log('fim')
}


exemplo_01();
// le_arquivo1();
// le_arquivo2();
// le_arquivo3();

// teste-erro-04.js