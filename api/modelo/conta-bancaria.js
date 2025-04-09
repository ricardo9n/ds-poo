// modelo/ContaBancaria.js
class ContaBancaria {

    /**
     * Creates an instance of ContaBancaria.
     *
     * @constructor
     * @param {Number} numero 
     */
    constructor(numero) {
        this.numero = numero;
        this.saldo = 0.0;
    }

    /**
     * Description placeholder
     *
     * @param {Number} valor 
     */
    depositar(valor) {
        if (valor < 0){
            throw new Error("Valor negativo");
        }
        this.saldo += valor;
    }

    /**
     * Description placeholder
     *
     * @param {Number} valor 
     */
    sacar(valor) {
        if (valor > this.saldo){
            throw new Error("Valor maior que saldo");
        }
        if (valor < 0){
            throw new Error("Valor negativo");
        }
        this.saldo -= valor;       
    }

    /**
     * Description placeholder
     *
     * @returns {number} 
     */
    getSaldo() {
        return this.saldo;
    }
}

module.exports = ContaBancaria;