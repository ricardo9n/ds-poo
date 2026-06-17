const {SaldoInsuficienteException} = require('./saldo-insuficiente-exception');

//conta-v4.js
class Conta {
    constructor(){
        this._titular = "";
        this._saldo = 0.0;
    }

    getTitular() {
        return this._titular;   
    }

    setTitular(novo_titular) {
        this._titular = novo_titular;            
    }

    deposita(valor) {
        console.log('depositando: '+valor)
        this._saldo += valor;   
    }
    
    //método atualizado!
    saca(valor) {
        if (valor > this._saldo) {
            throw new SaldoInsuficienteException("Saldo insuficiente");
        } else {
            console.log('sacando: '+valor)
            this._saldo = this._saldo - valor;
        }
    }

    getSaldo(){
        return this._saldo;
    }
}

exports.Conta = Conta;