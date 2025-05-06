class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Instanciando um objeto da classe Pessoa
  const pessoa1 = new Pessoa("Rayssa", 17);
  pessoa1.apresentar(); 
  
// atividade 2
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    exibirInfo() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}
// Instanciando objetos da classe Livro
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 200);
livro1.exibirInfo ();
 
// atividade 3
class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        console.log("Erro: Divisão por zero!");
        return null;
      }
    }
  }
  
 
  console.log("Soma:", Calculadora.somar(15, 5));         
  console.log("Divisão:", Calculadora.dividir(21, 3));    
  console.log("Multiplicação:", Calculadora.multiplicar(4, 2)); 
  