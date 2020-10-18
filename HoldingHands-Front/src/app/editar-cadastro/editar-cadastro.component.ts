import { UsuarioService } from './../service/usuario.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { Postagem } from '../model/postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css']
})
export class EditarCadastroComponent implements OnInit {
  user: User = new User()
  nomeUser: string
  linkFoto: string
  idUser: number
  adminUser: boolean
  senhaUser: string
  usuarioUser: string
  listaPostagens: Postagem[]

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alert: AlertasService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findByIdUser()

    let token = environment.token

    if (token == '') {
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Faça o login antes de entrar na edição de cadastro!')
    }

    this.findAllUserPostagens()
  }

  findByIdUser() {
    this.usuarioService.getByIdUser(environment.idUser).subscribe((resp: User) => {
      this.user = resp
      this.nomeUser = this.user.nome
      this.linkFoto = this.user.foto
    })
  }

  findAllUserPostagens() { 
    this.usuarioService.getByIdUser(environment.idUser).subscribe((resp: User) => {    
      this.listaPostagens = resp.postagem
    })
  }

  putUser() {
    this.user.nome = this.nomeUser
    this.user.foto = this.linkFoto
    
    this.usuarioService.putUsuario(this.user).subscribe((resp: User) => {
      this.user = resp
      environment.nomeUser = this.user.nome
      environment.fotoUser = this.user.foto
      
    })

    this.router.navigate(['/perfil'])
    this.alert.showAlertSuccess('Perfil alterado com sucesso!!')
  }

}

/*
this.listaPostagens.forEach(function (item) {
        item.qntCurtidas = 5
        this.postagemService.putPostagem(item).subscribe((res: Postagem) => {
          item = res
        })
      });
      */