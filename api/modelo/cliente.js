// modelo/Cliente.js
class Cliente {

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
        this.contas = [];
    }

    /**
     * Description placeholder
     *
     * @param {string} senha 
     * @returns {boolean} 
     */
    autenticar(senha) {
        return this.senha === senha;
    }

    /**
     * Description placeholder
     *
     * @param {*} conta 
     */
    adicionarConta(conta) {
        this.contas.push(conta);
    }

    /**
     * Description placeholder
     *
     * @returns {{}} 
     */
    getContas() {
        return this.contas;
    }

    /**
     * Description placeholder
     *
     * @returns {string} 
     */
    toString(){
        return `{Cliente:${this.nome} - ${this.cpf}}`
    }
}

module.exports = Cliente;