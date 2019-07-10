import { Component } from '@angular/core';
import { PessoaServiceService } from './pessoa-service.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '99POO';
  fieldNome : string;
  fieldIdade : number;

  getIdade() {
    this.pessoaService
      .getPessoaByNome(this.fieldNome)
      .subscribe((val) => { this.fieldIdade = val.idade; });
  }

  postPessoa() {
    this.pessoaService
      .postPessoa(new Pessoa(this.fieldNome,this.fieldIdade))
      .subscribe((val)=>alert(val.nome+":"+val.idade));
  }

  constructor(private pessoaService : PessoaServiceService) {}

}
