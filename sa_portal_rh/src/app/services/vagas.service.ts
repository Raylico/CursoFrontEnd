import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = "http://localhost:3000/vagas" //Endereço da Api

  constructor(private http: HttpClient ) { }

  //criar os métodos para conexão com a ApiREST

  //get - (pegar) obter a lista de vagas
  getVagas():Observable<Vaga[]> { //obervable -> rxjs => tradutor de JSON -> typescript 
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //post

  //put

  //delete
}
