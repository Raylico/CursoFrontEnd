//modelagem de curriculo
export class Curriculo {
    constructor(
        private _id: number,
        private _nome: string,
        private _telefone: number,
        private _email: string,
        private _experiencia: string,
        private _formacao: string,
    ){}

//métodos
public get id(): number {
    return this._id;
}
public set id(v: number): {
    this._id = var;
}
public get nome(): string {
    return this._nome;
}
public set nome(v: string): {
    this._nome = value;
}


}