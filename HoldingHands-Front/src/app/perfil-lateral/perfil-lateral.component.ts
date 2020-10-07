import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User'

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  nome: string
  
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {

  }

}
