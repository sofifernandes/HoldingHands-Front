import { UsuarioService } from './../service/usuario.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit {
  user: User= new User()
  nomeUser: string
  linkFoto: string

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findByIdUser()
  }

  findByIdUser() {
    this.usuarioService.getByIdUser(environment.idUser).subscribe((resp: User) => {
      this.user= resp
      this.nomeUser=this.user.nome
      this.linkFoto=this.user.foto
    })
  }

  putUser() {
    this.user.nome=this.nomeUser
    this.user.foto=this.linkFoto
    this.usuarioService.putUsuario(this.user).subscribe((resp: User) => {
      this.user= resp
      environment.nomeUser=this.user.nome
      environment.fotoUser=this.user.foto
      this.router.navigate(['/perfil'])
      this.alert.showAlertSuccess('Perfil alterado com sucesso!!')
    })
  }

}
