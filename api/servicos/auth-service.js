"use strict";

const Cliente = require("../modelo/cliente");

class AuthService {
    constructor(bancoController) {
        this.clienteAutenticado = null;
        this.funcionarioAutenticado = null;
        this.bancoController = bancoController;
    }

    /**
     * Description placeholder
     *
     * @param {Number} cpf 
     * @param {Number} senha 
     * @returns {Cliente} 
     */
    autenticarCliente(cpf, senha) {
        const cliente = this.bancoController.autenticarCliente(cpf,senha)
        if (!cliente) 
            throw new Error("Autenticação falhou.");
        this.clienteAutenticado = cliente;
        return cliente;
    }

    //Código desatualizado. Corrigir e liberar.
    /**
     * Description placeholder
     *
     * @param {Number} cpf 
     * @param {Number} senha 
     * @returns {*} 
     */
    autenticarFuncionario(cpf, senha) {
        throw new Error("Código Desatualizado!");
        const funcionario = funcionarios.find(f => f.cpf === cpf && f.autenticar(senha));
        if (!funcionario) throw new Error("Autenticação falhou.");
        this.funcionarioAutenticado = funcionario;
        return funcionario;
    }

    /** Description placeholder */
    logout() {
        this.clienteAutenticado = null;
        this.funcionarioAutenticado = null;
    }

    /**
     * Description placeholder
     *
     * @returns {*} 
     */
    verificarClienteAutenticado() {
        if (!this.clienteAutenticado) 
            throw new Error("Nenhum cliente autenticado.");
        return this.clienteAutenticado;
    }

    /**
     * Description placeholder
     *
     * @returns {*} 
     */
    verificarFuncionarioAutenticado() {
        if (!this.funcionarioAutenticado) 
            throw new Error("Acesso restrito a funcionários.");
        return this.funcionarioAutenticado;
    }
}

module.exports = AuthService;
