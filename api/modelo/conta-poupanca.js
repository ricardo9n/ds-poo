// modelo/ContaPoupanca.js
/**
 * Description placeholder
 *
 * @type {typeof ContaBancaria}
 */
const ContaBancaria = require("./conta-bancaria");

/**
 * Description placeholder
 *
 * @class ContaPoupanca
 * @typedef {ContaPoupanca}
 * @extends {ContaBancaria}
 */
class ContaPoupanca extends ContaBancaria {
    /**
     * Creates an instance of ContaPoupanca.
     *
     * @constructor
     * @param {Number} numero 
     * @param {Number} taxaJuros 
     */
    constructor(numero, taxaJuros) {
        super(numero);
        this.taxaJuros = taxaJuros;
    }

    /** Description placeholder */
    calcularRendimento() {
        this.saldo += this.saldo * this.taxaJuros;
    }

}

module.exports = ContaPoupanca;
