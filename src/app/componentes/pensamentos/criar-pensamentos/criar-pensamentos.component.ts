import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ])
      ],
      autoria: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento(){
    alert("Pensamento cancelado!")
    this.router.navigate(['/listarPensamento'])
  }
}
