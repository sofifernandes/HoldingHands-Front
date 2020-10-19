import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User();
  listaUsers: User[]
  senha: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  conferirSenha(event: any) {
    this.senha = event.target.value;
  }

  conferirUsuariosExistentes() {
    this.usuarioService.getAllUsuarios().subscribe((resp: User[]) => {
      this.listaUsers = resp
    })
  }

  cadastrar() {
    if (this.user.nome != null && this.user.foto != null && this.user.usuario != null && this.user.email != null && this.senha != null && this.user.senha != null) {
      if (this.senha === this.user.senha) {
        if (this.user.email.toLowerCase() === 'holdinghands.pi@gmail.com') {
          this.user.admin = true
        } else {
          this.user.admin = false
        }
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp
          this.router.navigate(["/login"])
          this.alert.showAlertSuccess("Usuário cadastrado com sucesso")
        }, (err) => {
          if (err == '500') {
            this.alert.showAlertDanger("Usuário já cadastrado")
          } else {
            this.alert.showAlertDanger("Aconteceu um erro. Provavelmente é porque esse usuário já existe :(")
          }
        })
      } else {
        this.alert.showAlertDanger("Suas senhas não conferem")
      }
    } else {
      this.alert.showAlertDanger("Preencha os campos corretamente!")
    }
  }
}
