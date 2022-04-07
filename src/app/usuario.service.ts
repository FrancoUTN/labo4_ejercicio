import { Injectable } from '@angular/core';

import { Usuario } from './usuario';
import { USUARIOS } from './mock-usuarios';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private mensajeService: MensajeService) { }

  getUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.mensajeService.add('UsuarioService: fetched users');
    return usuarios;
  }
  
  // getHero(id: number): Observable<Usuario> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const hero = USUARIOS.find(h => h.id === id)!;
  //   this.mensajeService.add(`UsuarioService: fetched user id=${id}`);
  //   return of(hero);
  // }
}
