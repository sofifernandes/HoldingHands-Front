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

    this.findByNomeUser()

  } 

  findByNomeUser() {  
      let nomeUser = localStorage.getItem("nome")            
      this.usuarioService.getByNomeUser(nomeUser).subscribe((resp: User) => {
        this.user = resp
      })
      if( this.user ) {
        this.nome = 'foi'
      } else {
        this.nome = 'não foi'
      }
  }

}
