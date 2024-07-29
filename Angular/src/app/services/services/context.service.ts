import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  
  public isAuth: boolean = false;
  public userInfo: any;
  public menu: any[] = [];
  public perfilamiento: any;
  public filtros: any;
  public idSesion: string = '';

  constructor() {
  }

  setInformation() {
    if (this.userInfo) {
      this.isAuth = true;
    }
    else
      this.isAuth = false;
  }

  SesionId() {
    if (this.idSesion)
      return this.idSesion;
    let valIdSesion = localStorage.getItem('sesion');
    if (valIdSesion || valIdSesion != null)
      this.idSesion = valIdSesion;
    else {
      // this.idSesion = uuid.v4();
      localStorage.setItem('sesion', this.idSesion);
    }
    return this.idSesion;
  }

  logout() {
    this.userInfo = undefined;
    this.perfilamiento = undefined;
    this.menu = [];
    this.isAuth = false;
    this.idSesion = '';
    this.filtros = undefined;
  }
}
