//atividade 2: Criar uma classe representando um veículo
class veiculo {
    //encapsular os atributos
    #marca
    #modelo
    #ano

    //construtor
    //o construtor é um método especial que é chamado quando a classe é instanciada
    constructor(marca, modelo, ano){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    //métodos
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`);
    }
}

//subclasse carro que herda da classe veiculo
//a subclasse carro tem um atributo a mais: portas
class carro extends veiculo {
    #portas
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano); //chama o construtor da superclasse  
        this.#portas = portas;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Portas: ${this.#portas}`);
    }
}
//instanciando a classe (criando um objeto)
let veiculo1 = new veiculo("Fiat", "Palio", 2010);
veiculo1.exibirInfo(); 
let veiculo2 = new carro("Chevrolet", "Onix", 2018, 4);
veiculo2.exibirInfo(); 





