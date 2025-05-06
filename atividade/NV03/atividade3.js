class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, bonus){
        super(nome, salario);
        this.bonus = bonus;
    }
    
}


