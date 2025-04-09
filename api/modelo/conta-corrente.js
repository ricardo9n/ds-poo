// modelo/ContaCorrente.js
/**
 * Description placeholder
 *
 * @type {typeof ContaBancaria}
 */
const ContaBancaria = require("./conta-bancaria");

/**
 * Description placeholder
 *
 * @class ContaCorrente
 * @typedef {ContaCorrente}
 * @extends {ContaBancaria}
 */
class ContaCorrente extends ContaBancaria {
    /**
     * Creates an instance of ContaCorrente.
     *
     * @constructor
     * @param {Number} numero 
     * @param {Number} limiteCredito 
     */
    constructor(numero, limiteCredito) {
        super(numero);
        this.limiteCredito = limiteCredito;
    }

    //Override - considera o limite de crédito
    /**
     * Description placeholder
     *
     * @param {Number} valor 
     */
    sacar(valor) {
        if (valor > this.saldo + this.limiteCredito ){
            throw new Error("Valor maior que saldo");
        }
        if (valor < 0){
            throw new Error("Valor negativo");
        }
        this.saldo -= valor;       
    }

}

module.exports = ContaCorrente;