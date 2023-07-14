import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {
  pensamento = {
    id: '1',
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
