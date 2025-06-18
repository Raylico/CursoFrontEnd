// modelagem de curriculo
export class Curriculo {
  // Ao declarar com 'public' no construtor, o TypeScript cria automaticamente
  // as propriedades da classe com esses nomes e as torna públicas.
  constructor(
    public id: number,
    public nome: string,
    public telefone: number,
    public email: string,
    public experiencia: string,
    public formacao: string
  ) {}

  // métodos de conversão de objetos
  // Agora, em toMap, você pode referenciar as propriedades diretamente (sem '_')
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      experiencia: this.experiencia,
      formacao: this.formacao,
    };
  }

  // fromMap permanece igual, já que ele já espera os nomes sem '_' do 'map'
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.telefone,
      map.email,
      map.experiencia,
      map.formacao
    );
  }
}
