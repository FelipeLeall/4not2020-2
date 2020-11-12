import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursoService {
  
  private apiServe: string = environment.apiServe
  private apiUri: string = this.apiServe + 'curso'

  constructor(private http: HttpClient){}
  
      listar(){
        return this.http.get(this.apiUri).toPromise()
      }

      excluir(id: string){
        // return this.http.delete(this.apiServe + 'curso/' +id).toPromise()
        return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
      }
}
