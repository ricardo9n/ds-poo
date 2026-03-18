const prompt = require("prompt-sync")();

const BancoAPI = require("../controle/banco-api");

const PersistenciaJSON = require("../persistencia/persistencia-json");

const ContaCorrente = require("../modelo/conta-corrente");
const ContaPoupanca = require("../modelo/conta-poupanca");

class InterfaceUsuario {
    constructor() {
        this.api = new BancoAPI(new PersistenciaJSON());
    }

    iniciar() {
        console.log("=== Sistema Bancário ===");
        let opcao;

        do {
            console.log("\n1 - Login Cliente");
            console.log("2 - Cadastrar Cliente");
            console.log("3 - Sair");
            opcao = prompt("Escolha uma opção: ");

            switch (opcao) {
                case "1":
                    this.menuCliente();
                    break;
                case "2":
                    this.cadastrarCliente();
                    break;
                case "3":
                    this.api.salvarDados();
                    console.log("Encerrando...");
                    break;
                default:
                    console.log("Opção inválida.");
            }
        } while (opcao !== "3");
    }

    cadastrarCliente() {
        const nome = prompt("Nome: ");
        const cpf = prompt("CPF: ");
        const senha = prompt("Senha: ");
        try {
            this.api.cadastrarCliente(nome, cpf, senha);
            console.log("Cliente cadastrado com sucesso.");
        } catch (err) {
            console.log(err.message);
        }
    }

    menuCliente() {
        const cpf = prompt("CPF: ");
        const senha = prompt("Senha: ");
        const cliente = this.api.autenticarCliente(cpf, senha);

        if (!cliente) {
            console.log("Autenticação falhou.");
            return;
        }

        let opcao;
        do {
            console.log(`\nBem-vindo, ${cliente.nome}`);
            console.log("1 - Ver Contas");
            console.log("2 - Criar Conta Corrente");
            console.log("3 - Criar Conta Poupança");
            console.log("4 - Depositar");
            console.log("5 - Sacar");
            console.log("6 - Sair");
            opcao = prompt("Escolha: ");

            switch (opcao) {
                case "1":
                    this.verContas(cliente);
                    break;
                case "2":
                    this.criarContaCorrente(cliente);
                    break;
                case "3":
                    this.criarContaPoupanca(cliente);
                    break;
                case "4":
                    this.depositar(cliente);
                    break;
                case "5":
                    this.sacar(cliente);
                    break;
                case "6":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida.");
            }
        } while (opcao !== "6");
    }

    verContas(cliente) {
        const contas = cliente.getContas();
        if (contas.length === 0) {
            console.log("Nenhuma conta cadastrada.");
            return;
        }

        contas.forEach((conta, i) => {
            console.log(`Conta ${i + 1}:`);
            console.log(`Número: ${conta.numero}`);
            console.log(`Saldo: ${conta.getSaldo().toFixed(2)}`);
            if (conta.limiteCredito !== undefined) {
                console.log(`Limite de Crédito: ${conta.limiteCredito}`);
            }
            if (conta.taxaJuros !== undefined) {
                console.log(`Taxa de Juros: ${conta.taxaJuros}`);
            }
        });
    }

    criarContaCorrente(cliente) {
        const numero = prompt("Número da conta: ");
        const limite = parseFloat(prompt("Limite de crédito: "));
        const conta = new ContaCorrente(numero, limite);
        this.api.adicionarContaAoCliente(cliente.cpf, conta);
        console.log("Conta Corrente criada.");
    }

    criarContaPoupanca(cliente) {
        const numero = prompt("Número da conta: ");
        const taxa = parseFloat(prompt("Taxa de juros: "));
        const conta = new ContaPoupanca(numero, taxa);
        this.api.adicionarContaAoCliente(cliente.cpf, conta);
        console.log("Conta Poupança criada.");
    }

    depositar(cliente) {
        const contas = cliente.getContas();
        if (contas.length === 0) return console.log("Sem contas.");
        const idx = parseInt(prompt("Índice da conta: ")) - 1;
        const valor = parseFloat(prompt("Valor: "));
        contas[idx].depositar(valor);
        this.api.salvarDados();
        console.log("Depósito realizado.");
    }

    sacar(cliente) {
        const contas = cliente.getContas();
        if (contas.length === 0) return console.log("Sem contas.");
        const idx = parseInt(prompt("Índice da conta: ")) - 1;
        const valor = parseFloat(prompt("Valor: "));
        if (contas[idx].sacar(valor)) {
            this.api.salvarDados();
            console.log("Saque realizado.");
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

module.exports = InterfaceUsuario;
