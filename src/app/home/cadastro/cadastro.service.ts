import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

///trocar pela API
const API = 'http://localhost:3000';

@Injectable()
export class CadastroService {

    constructor(private http: HttpClient) {}

    cadastrarUsuario(novoUsuario: Usuario) {
        return this.http.post(API + '/user/new', novoUsuario);
    }
}
