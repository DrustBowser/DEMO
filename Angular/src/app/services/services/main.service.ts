import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from 'src/app/shared/models/general.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  UrlBase = environment.production ? environment.somee : environment.debugPC;

  constructor(private http: HttpClient,
  ) { }

  login(cc: any): Observable<Resultado> {
      return this.http.post<Resultado>(this.UrlBase + '/Servicio/login', cc);
  }
}
