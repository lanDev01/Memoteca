import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamento = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'É a única estrela do Sistema Solar, conjunto de corpos celestes (planetas, planetas-anões, asteroides, cometas, meteoritos) que gira em torno do Sol. Tem 333 mil vezes a massa da Terra, e suas dimensões são 110 vezes maiores do que as do nosso planeta. É composto essencialmente pelos gases hidrogênio e hélio.',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    }
  ]
}
