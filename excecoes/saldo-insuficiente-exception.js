//arquivo: saldo-insuficiente-exception.js

class SaldoInsuficienteException extends Error {

    constructor(mensagem) {
        super(mensagem);
        this.name = 'SaldoInsuficiente'; // Nome da sua exceção personalizada
    }
}

exports.SaldoInsuficienteException = SaldoInsuficienteException