import { Component } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent {
  //atributos
  
  public vaga: Vaga = new Vaga(0,"","","",0); //serve para rastrear os dados no formulário por interpolação
  public vagas: Vaga[] =[]; //vetor para armazenar as vagas do BD

  //constructor
  constructor(private _vagasService: VagasService){}
  //aplicando o service no construtor

  //método onInit
  ngOnInit(): void{
    this.listarVagas();
  }
  //5 métodos para o crud
  listarVagas(): void{
    this._vagasService.getVagas().subscribe(
      (e) => {
        this.vagas = e.map(
          (vaga)=> Vaga.fromMap(vaga)
        );
      }, (error) => {
        console.error("Erro ao Listar Vagas: ",error);
      }
    );
  }

  //Listar Vaga por ID -READ - vaga unica
  listarVagaPorId(vaga:Vaga): void{
    //método para listar uma vaga no formulário para edição
    this.vaga = vaga;
    //a vaga clicada é definida com a vaga atual do formulário
  } 

  //CREATE - VAGA
  cadastrarVaga(): void{
    this._vagasService.postVaga(this.vaga).subscribe(
      () =>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();
      }, (error) => {console.error("Erro ao cadastrar Vaga: ", error);}
    );
  }
  //UPDATE - VAGA
  atualizarVaga(id:any):void{
    this._vagasService.putVaga(id,this.vaga).subscribe(
     () =>{
        this.vaga = new Vaga(0,"","","",0); //limpa o formulário
        this.listarVagas();//lista as vagas novamente
      }, 
      (error) => {console.error("Erro ao cadastrar Vaga: ", error);
      } 
    );
  }
  //DELETE - VAGA
  excluirVaga(id:any): void{
    this._vagasService.deleteVaga(id).subscribe(
     () =>{
        this.vaga = new Vaga(0,"","","",0); //limpa o formulário
        this.listarVagas();//lista as vagas novamente
      }, 
      (error) => {console.error("Erro ao cadastrar Vaga: ", error);
      } 
    );
  }
}
