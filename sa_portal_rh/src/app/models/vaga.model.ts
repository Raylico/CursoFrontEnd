// arquivo responsável pela modelagem de dados para vagas
export class Vaga {
  // Ao declarar com 'public' no construtor, o TypeScript automaticamente
  // cria as propriedades da classe com esses nomes e as torna acessíveis publicamente.
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public salario: number
  ) {}

  // métodos de conversão de objetos
  // Agora, em toMap, você pode referenciar as propriedades diretamente (sem '_')
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      salario: this.salario,
    };
  }

  // fromMap permanece igual, já que ele já espera os nomes sem '_' do 'map'
  static fromMap(map: any): Vaga {
    return new Vaga(map.id, map.nome, map.foto, map.descricao, map.salario);
  }
}
