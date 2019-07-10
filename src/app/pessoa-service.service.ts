import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  url = "http://localhost:8080";

  getPessoaByNome(nome : string) : Observable<Pessoa> {
    return this.http.get<Pessoa>(this.url + "/getPessoa/" + nome);
  }

  postPessoa(pessoa:Pessoa) : Observable<Pessoa> { 
    return this.http
      .post<Pessoa>(this.url+"/setPessoa/",pessoa);
  }

  constructor(private http: HttpClient) { }
}
