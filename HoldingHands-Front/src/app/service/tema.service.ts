import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllTemas() {
    return this.http.get("http://localhost:8080/tema", this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(`http://localhost:8080/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string) {
    return this.http.get(`http://localhost:8080/tema/nome/${nome}`, this.token)
  }

  postTemas(tema: Tema) {
    return this.http.post("http://localhost:8080/tema", tema, this.token)
  }

  putTemas(tema: Tema) {
    return this.http.put("http://localhost:8080/tema", tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
  }
  
}
