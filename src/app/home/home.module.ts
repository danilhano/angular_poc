import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroService } from './cadastro/cadastro.service';

@NgModule({
  declarations: [ LoginComponent, HomeComponent, CadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  providers: [CadastroService]
})
export class HomeModule { }
