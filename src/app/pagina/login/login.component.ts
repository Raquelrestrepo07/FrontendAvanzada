import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDTO } from 'src/app/modelo/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDTO: LoginDTO;

  constructor(){
    this.loginDTO = new LoginDTO();
  }

  public iniciarSesion(){
    console.log(this.loginDTO);
  }

}
