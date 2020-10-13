import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

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

  idTema: number

  constructor(
    private postagemService: PostagemService, 
    private temaService: TemaService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllPostagens()
    this.findAllTemas()
  }



  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens= resp
    })
  }

  publicar() {
    this.tema.id= this.idTema
    this.postagem.tema = this.tema
    if(this.postagem.titulo == null || this.postagem.textoPostagem == null || this.postagem.tema == null ){
      this.alert.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem =  resp
        this.postagem = new Postagem()
        this.alert.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
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
}

 