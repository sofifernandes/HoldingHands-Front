import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  nome: string   
  user: User = new User()
  
  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit() {  

    this.getByNomeUser()

  } 

  getByNomeUser() {  
      let nomeUser = localStorage.getItem("nome")            
      this.usuarioService.getByNomeUser(nomeUser).subscribe((resp: User) => {
        this.user = resp
      })
      this.nome = this.user.usuario  
  }

}