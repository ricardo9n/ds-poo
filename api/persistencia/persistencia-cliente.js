"use strict";

const fs = require("fs");
const path = require("path");

const Cliente = require("../modelo/cliente");
const ContaCorrente = require("../modelo/conta-corrente");
const ContaPoupanca = require("../modelo/conta-poupanca");

class PersistenciaClienteJSON {

    constructor(caminhoArquivo = path.join(__dirname, "dados.json")) {
        this.caminhoArquivo = caminhoArquivo;
    }

    /**
     * Description placeholder
     *
     * @returns {*} 
     */
    carregarClientes() {
        if (!fs.existsSync(this.caminhoArquivo)) return [];

        const arquivo = fs.readFileSync(this.caminhoArquivo, "utf8");
        const dados = JSON.parse(arquivo);
        
        return dados.map(obj => {
            const cliente = new Cliente(obj.nome, obj.cpf, obj.senha);
            obj.contas.forEach(conta => {
                let novaConta;
                if (conta.limiteCredito !== undefined) {
                    novaConta = new ContaCorrente(conta.numero, conta.limiteCredito);
                } else if (conta.taxaJuros !== undefined) {
                    novaConta = new ContaPoupanca(conta.numero, conta.taxaJuros);
                }
                novaConta.saldo = conta.saldo;
                cliente.adicionarConta(novaConta);
            });
            return cliente;
        });
    }

    /**
     * Description placeholder
     *
     * @param {*} clientes 
     */
    salvarClientes(clientes) {
        const dados = clientes.map(c => ({
            nome: c.nome,
            cpf: c.cpf,
            senha: c.senha,
            contas: c.getContas().map(conta => ({
                numero: conta.numero,
                saldo: conta.saldo,
                limiteCredito: conta.limiteCredito,
                taxaJuros: conta.taxaJuros
            }))
        }));

        fs.writeFileSync(this.caminhoArquivo, JSON.stringify(dados, null, 2));
    }
}

module.exports = PersistenciaClienteJSON;
