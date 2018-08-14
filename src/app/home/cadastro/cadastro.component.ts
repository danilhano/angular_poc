import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { CadastroService } from './cadastro.service';


@Component({
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private construirForm: FormBuilder, private cadastroService: CadastroService, private rotas: Router) { }

  ngOnInit() {

    this.cadastroForm = this.construirForm.group({
        userName:['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ]],
        email:['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
        ]]
    });
  }

  cadastrarUsuario() {
    if(this.cadastroForm.valid && !this.cadastroForm.pending) {
      const novoUsuario = this.cadastroForm.getRawValue() as Usuario;
            
      this.cadastroService
      .cadastrarUsuario(novoUsuario)
      .subscribe(
          () => this.rotas.navigate(['']),
          err => console.log(err)
      );
      console.log("Dados: " + JSON.stringify(novoUsuario));
    }
      
  }

}
