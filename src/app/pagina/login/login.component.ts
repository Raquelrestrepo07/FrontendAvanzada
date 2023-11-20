import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDTO } from 'src/app/modelo/login-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDTO: LoginDTO;
  alerta!:Alerta;


  constructor(private authService: AuthService, private tokenService: TokenService){
    this.loginDTO = new LoginDTO();
  }


  public login(){
    console.log(this.loginDTO);
    this.authService.login(this.loginDTO).subscribe({
      next: data => {
      this.tokenService.login(data.respuesta.Token);
      //console.log(data.respuesta.Token);
    },
    error: error => {
    this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
    }
    });
  }

}
