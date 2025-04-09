// arquivo: contato.js

"use strict";

class Contato {
    constructor(nome, email, endereco, dataNascimento) {
        this.id = null;
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
    }

    getId() {
        return this.id;
    }

    setId(novo) {
        this.id = novo;
    }

    getNome() {
        return this.nome;
    }

    setNome(novo) {
        this.nome = novo;
    }

    getEmail() {
        return this.email;
    }

    setEmail(novo) {
        this.email = novo;
    }

    getEndereco() {
        return this.endereco;
    }

    setEndereco(novo) {
        this.endereco = novo;
    }

    getDataNascimento() {
        return this.dataNascimento;
    }

    setDataNascimento(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    static fromArray(row){
        // console.log(row);
        let c = new Contato(row.nome,
                    row.email,
                    row.endereco,
                    row.data_nasc);
        c.setId(row.id);
        return c;
                    
    }

    toArray(){
        return [this.nome, this.email, this.endereco, this.dataNascimento];
    }
}

module.exports = Contato;