import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: '', 
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      },
      {
        path: 'cadastro', 
        component: CadastroComponent,
        data: {
          title: 'Cadastro'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
 
})
export class HomeRoutingModule { }
