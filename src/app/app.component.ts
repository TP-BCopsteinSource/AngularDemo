import { Component } from '@angular/core';
import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '99POO';
  fieldNome : string;
  fieldIdade : number;

  send() {
    this.pessoaService.getPessoaByNome(this.fieldNome)
      .subscribe((val) => { alert(val); });
  }

  constructor(private pessoaService : PessoaServiceService) {}

}
