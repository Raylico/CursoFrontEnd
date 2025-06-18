import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculosService {
  private apiUrl = "http://localhost:3003/curriculos";
  constructor(private http: HttpClient) { }

  //get
  getCurriculos():Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }
  //post
  postCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }
  //put
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const url = this.apiUrl + "/" + id; //construir a url join(apiUrl+id)
    return this.http.put<Curriculo[]>(url, curriculo);
  }
  //delete
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    const url = this.apiUrl + "/" + id;
    return this.http.delete<Curriculo[]>(url);
  }
}
