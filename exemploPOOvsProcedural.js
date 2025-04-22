//diferença entre POO e Procedural (estrutural)

//procedural
//declaração de variável
let produto1 = {
    nome: "Celular",
    preco: 1000,
    deconto: function(){
        return this.preco * 0.1; //10% de desconto
    },
};//coleção

let produto2 = {
    nome: "Camera Digital",
    preco: 1000,
    deconto: function(){
        return this.preco * 0.1; //10% de desconto
    },
};//coleção

//POO - classe de produtos

class Produto{
    //atributos
    #nome;
    #preco;
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }
    deconto(){
        return this.preco * 0.1; //erro ao chamar this.preco, pois o atributo está privado
    }
}

//instancioar um objeto 
let p1 = new Produto("Impressora", 2000);
let p2 = new Produto("Tablet", 1500);

//exemplos de uso de POO
class Pessoa {
    //atributos privados
    #nome;
    #idade;
    #cpf;

    //construtor
    constructor(nome, idade, cpf) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    //métodos públicos
    get getNome() {
        return this.#nome;
      }
      get getIdade() {
        return this.#idade;
      }
      get getCpf() {
        return this.#cpf;
      }
    
      set setIdade(idade) {
        this.#idade = idade;
      }
    
    //método para exibir as informações
    exibirInfo(){
        console.log(`Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`);
    }
}

let pessoa1 = new Pessoa("João", 30, '123.456.789-00');
let pessoa2 = new Pessoa("Maria", 35, '333.456.789-00');

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 31;//atualiza a idade
pessoa1.exibirInfo(); //exibe as informações atualizadas

//herança (extends)

class Funcionario extends Pessoa {
    //atributos privados
    #cargo;
    #salario;

     //construtor
     constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade,cpf); //chama o construtor da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //métodos publicos
    get getCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;
    }
    set setSalario(salario){
        this.#salario = salario;
    }
    set setCargo(cargo){
        this.#cargo = cargo;
    }

    //método exibirInfo
    exibirInfo(){
        super.exibirInfo(); //chama da superClasse
        console.log(`Cargo: ${this.getCargo} \nSalário: ${this.getSalario}`);
    }
}

let Funcionario1 = new Funcionario("Pedro", 27, "213.231.123-00", "Motorista", 3000);