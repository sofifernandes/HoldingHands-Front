import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {  
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

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTema= resp
    })
  }
 

}

 