import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User'
import { AuthService } from '../service/auth.service';
import { environment } from '../../environments/environment.prod'

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  nome: string
  user: User = new User()
  nomeUser = environment.nomeUser
  fotoUser = environment.fotoUser

  constructor(
    private usuarioService: UsuarioService) { }


    this.getByNomeUser()

  } 

  ngOnInit() {

  }

}