class ContaBancaria{
    #titular
    #saldo

//não tem o saldo ainda porque inicialmente ele é 0
    constructor(titular){
    this.#titular = titular;
    this.#saldo = 0;
}
//método para depositar dinheiro na conta
depositar(valor){
    if(valor > 0){
        this.#saldo += valor;
        console.log(`Deposito realizado com sucesso!`)
    }else{
        console.log(`Valor inválido para deposito!`)
    }
}
sacar(valor){
    if(valor > 0 && valor <= this.#saldo){
        this.#saldo -= valor;
        console.log(`Saque realizado com sucesso!`);
        //if else encadeado 
    }else if(valor > this.#saldo){
        console.log(`Saldo insuficiente!`);
    }else{
        console.log(`Valor inválido para saque!`);
        }
    }

    exibirSaldo(){
        console.log(`Titular: ${this.#titular}, Saldo: R$ ${this.#saldo}`);
    }
}

let conta1 = new ContaBancaria("Mirella");
conta1.depositar(2500);
conta1.exibirSaldo();
conta1.sacar(500);
conta1.exibirSaldo();
conta1.sacar(2100);
conta1.exibirSaldo();





