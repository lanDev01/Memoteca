import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamentos/pensamento.service';
import { Pensamento } from '../pensamentos/pensamentos';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  favoritos: boolean = false
  paginaAtual: number = 1

  titulo: string = 'Meu Mural'
  haMaisPensamentos: boolean = true
  filtro: string = ''
  listaPensamentos: Pensamento[] = [];
  listaFavoritos: Pensamento[] = []

  constructor(
    private service: PensamentoService,
    private router: Router
  ) {}

  recarregarComponente() {
    this.favoritos = false
    this.paginaAtual = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listarPensamentosFavoritos => {
        this.listaPensamentos = listarPensamentosFavoritos
        this.listaFavoritos = listarPensamentosFavoritos
      })
  }
}
