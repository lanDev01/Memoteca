import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo 1'
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelarPensamento(){
    alert("Pensamento cancelado!")
  }
}
