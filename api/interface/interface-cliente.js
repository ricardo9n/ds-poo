"use strict";

const prompt = require("prompt-sync")();
const BancoController = require("../controle/banco-controller");
const AuthService = require("../servicos/auth-service");
const PersistenciaClienteJSON = require("../persistencia/persistencia-cliente");
const ContaCorrente = require("../modelo/conta-corrente");
const ContaPoupanca = require("../modelo/conta-poupanca");

class InterfaceCliente {

    constructor() {
        this.persistenciaCliente = new PersistenciaClienteJSON();
        this.bancoController = new BancoController(this.persistenciaCliente);//, this.authService);
        this.authService = new AuthService(this.bancoController);
    }

    exibirMenu() {
        while (true) {
            console.log("\n=== Sistema Bancário ===");
            console.log("1. Login Cliente");
            console.log("2. Login Funcionário");
            console.log("3. Cadastrar Cliente");
            console.log("4. Adicionar Conta Corrente");
            console.log("5. Adicionar Conta Poupança");
        if (this.#verificarClienteAutenticado(false)){
                console.log("6. Depositar");
                console.log("7. Sacar");
                console.log("8. Verificar Saldo");
            }
            console.log("9. Logout");
            console.log("0. Sair");
            
            const opcao = prompt("Escolha uma opção: ");

            try {
                switch (opcao) {
                    case "1":
                        this.loginCliente();break;
                    case "2":
                        this.loginFuncionario(); break;
                    case "3":
                        this.cadastrarCliente(); break;
                    case "4":
                        this.adicionarContaCorrente(); break;
                    case "5":
                        this.adicionarContaPoupanca(); break;
                    case "6":
                        this.depositar(); break;
                    case "7":
                        this.sacar(); break;
                    case "8":
                        this.verificarSaldo(); break;
                    case "9":
                        this.logout(); break;
                    case "0":
                        console.log("Saindo...");
                        return;
                    default:
                        console.log("Opção inválida.");
                }
            } catch (erro) {
                console.log(`Erro: ${erro.message}`);
            }
        }
    }

    loginCliente() {
        const cpf = prompt("CPF: ");
        const senha = prompt("Senha: ");
        try {
            const cliente = this.authService.autenticarCliente(cpf, senha);
            console.log(`Bem-vindo, ${cliente.nome}!`);
            // Exibir as contas do cliente
            this.#exibirContas(cliente);
        } catch (erro) {
            console.log("Falha na autenticação: " + erro.message);
        }
    }

    /** Description placeholder */
    loginFuncionario() {
        const cpf = prompt("CPF: ");
        const senha = prompt("Senha: ");
        try {
            const funcionario = this.authService.autenticarFuncionario(cpf, senha);
            console.log(`Bem-vindo, ${funcionario.nome}!`);
        } catch (erro) {
            console.log("Falha na autenticação: " + erro.message);
        }
    }

    /**
     * Description placeholder
     *
     * @param {boolean} [print_error_message=true] 
     * @returns {*} 
     */
    #verificarClienteAutenticado(print_error_message=true){
        try{
            const cliente = this.authService.verificarClienteAutenticado();
            return cliente;
        }catch (erro){
            if (print_error_message) console.log("Cliente não autenticado!");
        }
    }

    // Função para exibir as contas do cliente
    /**
     * Description placeholder
     *
     * @param {*} cliente 
     */
    #exibirContas(cliente) {
        if (cliente.contas.length === 0) {
            console.log("Você não tem nenhuma conta registrada.");
            return;
        }

        console.log("\nContas registradas:");
        cliente.contas.forEach((conta, index) => {
            console.log(`${index + 1}. Conta ${conta.numero} - Saldo: R$ ${conta.getSaldo().toFixed(2)}`);
        });
    }

    /** Description placeholder */
    cadastrarCliente() {

        const nome = prompt("Nome: ");
        const cpf = prompt("CPF: ");
        const senha = prompt("Senha: ");
        try {
            this.bancoController.cadastrarCliente(nome, cpf, senha);
            console.log("Cliente cadastrado com sucesso!");
        } catch (erro) {
            console.log("Erro ao cadastrar cliente: " + erro.message);
        }
    }

    // Método para adicionar uma Conta Corrente
    /** Description placeholder */
    adicionarContaCorrente() {
        //todo
        //falta verificar funcionario logado

        const cpf = prompt('Digite o cpf do cliente: ');
        const numeroConta = prompt('Digite o número da Conta Corrente: ');
        const limiteCredito = parseFloat(prompt('Digite o limite de crédito da Conta Corrente: '));

        const contaCorrente = new ContaCorrente(numeroConta, limiteCredito);

        this.bancoController.adicionarContaAoCliente(cpf, contaCorrente);

        console.log(`Conta Corrente ${numeroConta} adicionada com sucesso!`);
    }

    // Método para adicionar uma Conta Poupança
    /** Description placeholder */
    adicionarContaPoupanca() {
        //falta verificar funcionario logado

        const cpf = prompt('Digite o cpf do cliente: ');
        const numeroConta = prompt('Digite o número da Conta Poupança: ');
        const taxaJuros = parseFloat(prompt('Digite a taxa de juros anual da Conta Poupança: '));

        const contaPoupanca = new ContaPoupanca(numeroConta, taxaJuros);
        this.bancoController.adicionarContaAoCliente(cpf, contaPoupanca);

        console.log(`Conta Poupança ${numeroConta} adicionada com sucesso!`);
    }

    /** Description placeholder */
    depositar() {
        const cliente = this.#verificarClienteAutenticado();

        const cpf = cliente.cpf
        const numeroConta = prompt("Número da conta: ");
        const valor = parseFloat(prompt("Valor do depósito: "));
        try {
            this.bancoController.depositar(cpf, numeroConta, valor);
            console.log("Depósito realizado com sucesso!");
        } catch (erro) {
            console.log("Erro ao depositar: " + erro.message);
        }
    }

    /** Description placeholder */
    sacar() {
        const cliente = this.#verificarClienteAutenticado();
        const numeroConta = prompt("Número da conta: ");
        const valor = parseFloat(prompt("Valor do saque: "));
        try {
            this.bancoController.sacar(cliente.cpf, numeroConta, valor);
            console.log("Saque realizado com sucesso!");
        } catch (erro) {
            console.log("Erro ao sacar: " + erro.message);
        }
    }

    /** Description placeholder */
    verificarSaldo() {
        const cliente = this.#verificarClienteAutenticado();

        const cpf = cliente.cpf;
        const numeroConta = prompt("Número da conta: ");
        try {
            const saldo = this.bancoController.verificarSaldo(cpf, numeroConta);
            console.log(`Saldo da conta ${numeroConta}: R$ ${saldo}`);
        } catch (erro) {
            console.log("Erro ao verificar saldo: " + erro.message);
        }
    }

    /** Description placeholder */
    logout() {
        this.authService.logout();
        console.log("Logout realizado com sucesso.");
    }
}

module.exports = InterfaceCliente;
