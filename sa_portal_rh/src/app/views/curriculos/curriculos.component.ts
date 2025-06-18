// import { Component } from '@angular/core';
import { Component } from '@angular/core'
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent {
  //atributos

  public curriculo: Curriculo = new Curriculo(0,"",0,"","",""); //serve para rastrear os dados no formulário por interpolação
  public curriculos: Curriculo[] =[]; //vetor para armazenar as vagas do BD

  //constructor
  constructor(private _curriculosService: CurriculosService){}
  //aplicando o service no construtor

  //método onInit
  ngOnInit(): void{
    this.listarCurriculos();
  }
  //5 métodos para o crud
  listarCurriculos(): void{
    this._curriculosService.getCurriculos().subscribe(
      (e) => {
        this.curriculos = e.map(
          (curriculo)=> Curriculo.fromMap(curriculo)
        );
      }, (error) => {
        console.error("Erro ao Listar Curriculos: ",error);
      }
    );
  }
}










