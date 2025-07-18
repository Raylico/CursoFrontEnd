import { Component } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})

//controller -> view -> model
export class VagasComponent {
  public vagas: Vaga[] = []; // vetor para armazenar as vagas do BD

  constructor(private _vagasService: VagasService){}
  //injeta o serviço de vagas  dentro do componente

  ngOnInit(): void {
    this.listarVagas();
  }

  //função para listar as vagas

  listarVagas(){
    this._vagasService.getVagas().subscribe( //subscribe é um método do Observable que permite receber os dados e tratar para o vetor
       (e) => {
        this.vagas = e.map(
          (vaga) => {
            return Vaga.fromMap(vaga);
          }
        );
       }
    )
  }

}
