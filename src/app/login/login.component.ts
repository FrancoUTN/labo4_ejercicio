import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre:string = '';
  clave:string = '';
  texto:string = '';

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios()
    .subscribe(usuarios => this.usuarios = usuarios);
  }

  noHaceNada() {
    this.texto = "No hace nada, todavía."
  }

}
