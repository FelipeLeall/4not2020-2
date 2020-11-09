import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursoService {
  private apiServe = environment.apiServe

  constructor(private http: HttpClient){}
  
      listar(){
        return this.http.get(this.apiServe + "curso").toPromise()
      }
}
