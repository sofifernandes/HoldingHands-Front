import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {  

  constructor() { }

  ngOnInit() {    
  }
  
}

 