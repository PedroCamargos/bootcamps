
class ContaBancaria {
    //parametros
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //alterado o nome para _saldo para utilizar o nome saldo no get e set 
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação Negada"; 
        }
        this._saldo = this._saldo - valor;
        return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Conta Corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupança'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitaria'
    }

    sacar(valor) {
        if (valor > 500){
            return "Operação Negada!";
        } 
        return this._saldo = this._saldo - valor;
    }
}
