// modelo/Funcionario.js
class Funcionario {

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }

    /**
     * Description placeholder
     *
     * @param {Number} senha 
     * @returns {boolean} 
     */
    autenticar(senha) {
        return this.senha === senha;
    }
}

module.exports = Funcionario;