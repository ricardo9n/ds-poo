"use strict";

/**
 * Description placeholder
 *
 * @type {typeof Cliente}
 */
const Cliente = require("../modelo/cliente");
// const Funcionario = require("../modelo/funcionario");
//const AuthService = require("../servicos/AuthService");

class BancoController {
    constructor(persistencia) {
        this.persistenciaCliente = persistencia;
        this.clientes = this.persistenciaCliente.carregarClientes();
        // this.authService = new AuthService(); // Injetando serviço de autenticação
    }

    /**
     * Description placeholder
     *
     * @param {Number} cpf 
     * @param {Number} senha 
     * @returns {*} 
     */
    autenticarCliente(cpf, senha) {
        const cliente = this.clientes.find(c => c.cpf === cpf && c.autenticar(senha));
        if (!cliente) 
            throw new Error("Autenticação falhou.");
        return cliente;
    }

    /**
     * Description placeholder
     *
     * @param {String} nome 
     * @param {Number} cpf 
     * @param {Number} senha 
     * @returns {Cliente} 
     */
    cadastrarCliente(nome, cpf, senha) {
        if (this.buscarCliente(cpf)) {
            throw new Error("Cliente com este CPF já existe.");
        }
        const cliente = new Cliente(nome, cpf, senha);
        this.clientes.push(cliente);
        this.persistenciaCliente.salvarClientes(this.clientes);
        return cliente;
    }

    /**
     * Description placeholder
     *
     * @param {String} cpf 
     * @returns {*} 
     */
    buscarCliente(cpf) {
        return this.clientes.find(c => c.cpf === cpf);
    }

    /**
     * Description placeholder
     *
     * @returns {*} 
     */
    getClientes() {
        return this.clientes;
    }

    /**
     * Description placeholder
     *
     * @param {String} cpf 
     * @param {String} conta 
     */
    adicionarContaAoCliente(cpf, conta) {
        const cliente = this.buscarCliente(cpf);
        console.debug()
        if (cliente) {
            cliente.adicionarConta(conta);
            this.persistenciaCliente.salvarClientes(this.clientes);
        }
    }

    /**
     * Description placeholder
     *
     * @param {String} numeroConta 
     * @param {Number} valor 
     */
    depositar(cpf, numeroConta, valor) {
        // const cliente = this.authService.verificarClienteAutenticado();
        const cliente = this.buscarCliente(cpf);
        const conta = cliente.getContas().find(c => c.numero === numeroConta);
        if (!conta) throw new Error("Conta não encontrada.");
        conta.depositar(valor);
        this.persistenciaCliente.salvarClientes(this.clientes);
    }

    /**
     * Description placeholder
     *
     * @param {String} numeroConta 
     * @param {Number} valor 
     */
    sacar(cpf, numeroConta, valor) {
        // const cliente = this.authService.verificarClienteAutenticado();
        const cliente = this.buscarCliente(cpf);
        const conta = cliente.getContas().find(c => c.numero === numeroConta);
        if (!conta) throw new Error("Conta não encontrada.");
        conta.sacar(valor);
        this.persistenciaCliente.salvarClientes(this.clientes);
    }

    /**
     * Description placeholder
     *
     * @param {Number} numeroConta 
     * @returns {*} 
     */
    verificarSaldo(cpf, numeroConta) {
        // const cliente = this.authService.verificarClienteAutenticado();
        const cliente = this.buscarCliente(cpf);
        const conta = cliente.getContas().find(c => c.numero === numeroConta);
        if (!conta) throw new Error("Conta não encontrada.");
        return conta.getSaldo();
    }

    /**
     * Description placeholder
     *
     * @param {String} cpfOrigem 
     * @param {Number} numeroContaOrigem 
     * @param {String} cpfDestino 
     * @param {Number} numeroContaDestino 
     * @param {Number} valor 
     */
    transferir(cpfOrigem, numeroContaOrigem, cpfDestino, numeroContaDestino, valor) {
        // const clienteOrigem = this.authService.verificarClienteAutenticado();
        const clienteOrigem = this.buscarCliente(cpfOrigem);
        const contaOrigem = clienteOrigem.getContas().find(c => c.numero === numeroContaOrigem);
        if (!contaOrigem) throw new Error("Conta de origem não encontrada.");
        
        const clienteDestino = this.buscarCliente(cpfDestino);
        if (!clienteDestino) throw new Error("Cliente de destino não encontrado.");
        
        const contaDestino = clienteDestino.getContas().find(c => c.numero === numeroContaDestino);
        if (!contaDestino) throw new Error("Conta de destino não encontrada.");
        
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        this.persistenciaCliente.salvarClientes(this.clientes);
    }
}

module.exports = BancoController;
