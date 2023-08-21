import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamentos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(
      private service: PensamentoService,
      private router: Router
    ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
    });
}

carregarMaisPensamentos() {
  this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
    this.listaPensamentos.push(...listaPensamentos)
    if(!this.listaPensamentos.length) {
      this.haMaisPensamentos
    }
  })
}

pesquisarPensamentos() {
  this.haMaisPensamentos = true
  this.paginaAtual = 1
  this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

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
