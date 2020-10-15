import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'contato', component: ContatoComponent },
  {path: 'sobre', component: SobreComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent },
  {path: 'cadastro-tema', component: PostTemaComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'editar-post/:id', component: PutPostagemComponent},
  {path: 'delete-post/:id', component: DeletePostagemComponent},
  {path: 'editar-tema/:id', component: PutTemaComponent},
  {path: 'delete-tema/:id', component: DeleteTemaComponent},
  {path: 'informações', component: InformacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
