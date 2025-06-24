import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent {
  public curriculo: Curriculo = new Curriculo(0, '', 0, '', '', '');
  public curriculos: Curriculo[] = [];
  public listaDeCurriculos: Curriculo[] = [];
  public isEditing = false;

  constructor(private _curriculosService: CurriculosService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculosService.getCurriculos().subscribe(
      (e) => {
        this.curriculos = e.map((curriculo) => Curriculo.fromMap(curriculo));
        this.listaDeCurriculos = this.curriculos; // para usar no HTML
      },
      (error) => {
        console.error('Erro ao Listar Currículos: ', error);
      }
    );
  }

  listarCurriculoPorId(curriculo: Curriculo): void {
    this.curriculo = curriculo;
    this.isEditing = true;
  }

  cadastrarCurriculo(): void {
    this._curriculosService.postCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '');
        this.isEditing = false;
        this.listarCurriculos();
      },
      (error) => {
        console.error('Erro ao cadastrar curriculo: ', error);
      }
    );
  }

  atualizarCurriculo(id: any): void {
    this._curriculosService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '');
        this.isEditing = false;
        this.listarCurriculos();
      },
      (error) => {
        console.error('Erro ao atualizar curriculo: ', error);
      }
    );
  }

  salvarCurriculo(): void {
    if (this.isEditing) {
      this.atualizarCurriculo(this.curriculo.id);
    } else {
      this.cadastrarCurriculo();
    }
  }

  excluirCurriculo(id: any): void {
    this._curriculosService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '');
        this.isEditing = false;
        this.listarCurriculos();
      },
      (error) => {
        console.error('Erro ao excluir curriculo: ', error);
      }
    );
  }

  resetForm(): void {
    this.curriculo = new Curriculo(0, '', 0, '', '', '');
    this.isEditing = false;
  }
}
