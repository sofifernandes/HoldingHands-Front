import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTema: Tema[]

  user: User = new User()

  idTema: number
  idUser: number

  frasePostagem: string

  constructor(
    private postagemService: PostagemService,
    private usuarioService: UsuarioService, 
    private temaService: TemaService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.getIdUser()    
    this.findAllTemas()
    this.fraseAleatoria()
    this.findAllUserPostagens()
    
  }
 

  publicar() {
    this.tema.id= this.idTema
    this.postagem.tema = this.tema 
    this.user.id= this.idUser
    this.postagem.usuario = this.user
    if(this.postagem.titulo == null || this.postagem.textoPostagem == null || this.postagem.tema == null ){
      this.alert.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem =  resp
        this.postagem = new Postagem()
        this.alert.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllUserPostagens()
      })
    }
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTema= resp
    })
  }
 
  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }  

  getIdUser(): number{    
    let nomeUser = localStorage.getItem("nome")
    this.usuarioService.getByNomeUser(nomeUser).subscribe((resp: User) => {      
      this.idUser = resp.id      
    })
    return this.idUser    
  }

  fraseAleatoria() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
      this.frasePostagem = 'Qual o insight de hoje?'
    } else if  (num == 1) {
      this.frasePostagem = 'Que tal ajudar alguém hoje?'
    } else {
      this.frasePostagem = 'Colabore conosco!'
    }
  }

  findAllUserPostagens() { 
    this.usuarioService.getByIdUser(this.idUser).subscribe((resp: User) => {    
      this.listaPostagens = resp.postagem
    })
  }
}

 