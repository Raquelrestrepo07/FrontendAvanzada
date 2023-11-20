import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public getCodigo(): number {
    const token = this.getToken();
    if (token) {
    const values = this.decodePayload(token);
    return values.id;
    }
    return 0;
  }

  public getContrasenia(): string {
    const token = this.getToken();
    if (token) {
    const values = this.decodePayload(token);
    return values.contrasenia;
    }
    return "";
  }

  constructor(private router: Router) { }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    }

  public getToken(): string | null {
    // console.log(TOKEN_KEY);
    // console.log(sessionStorage);
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    if (this.getToken()) {
    return true;
    }
    return false;
  }

  // public login(token:string){
  //   this.setToken(token);
  //   this.router.navigate(["/"]);
  // }

  // public logout() {
  //   window.sessionStorage.clear();
  //   this.router.navigate(["/login"]);
  // }

  public logout() {
    window.sessionStorage.clear();
    this.router.navigate(["/login"]).then(() => {
    window.location.reload();
    });
  }

  public login(token: string) {
    this.setToken(token);
    //console.log(token);
    this.router.navigate(["/"]).then(() => {
    window.location.reload();
    });
  }
  private decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }

  public getEmail():string{
    const token = this.getToken();
    //console.log(token);
    if(token){
    const values = this.decodePayload(token);
    return values.sub;
    }
    return "";
    }

    public getRole():string[]{
      const token = this.getToken();
      if(token){
      const values = this.decodePayload(token);
      return values.rol;
      }
      return [];
      }
}
