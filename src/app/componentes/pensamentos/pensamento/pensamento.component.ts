import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Alan',
    modelo: 'modelo3'
  }

  larguraPensamento(): String {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
