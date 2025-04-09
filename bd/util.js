"use strict";

// arquivo: util.js
function imprime_contato(linha){
  try{
    console.log(`${linha.id} ; ${linha.nome} ; ${linha.email} ; ${linha.endereco} ; ${linha.data_nasc.toLocaleString('pt-BR')}`) ; 
  }catch{
    console.log(`${linha.id} ; ${linha.nome} ; ${linha.email} ; ${linha.endereco} ; ${linha.data_nasc}`) ; 
  }
}

function data_para_str(data){
  //somente data
  // data.toISOString().slice(0,10).replace('T',' ') 

  //formato local, não aceito no mysql
  // data.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }); 

  //timestamp
  return data.toISOString().slice(0,19);
}

//exportando funções
module.exports = { data_para_str, imprime_contato }