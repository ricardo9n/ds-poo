//conta-v2.js
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

	saca(valor) {
        console.log(`sacando: ${valor}`)
        // posso sacar até saldo
        if (valor > this._saldo) { 
            console.log("Não posso sacar fora do limite!");
            return false;
        } else {
            this._saldo = this._saldo - valor;
            return true;
        }
    }

    getSaldo(){
        return this._saldo;
    }
}

exports.Conta = Conta;