import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comentario, ComentarioPublicacion } from "../models/comentario/comentario.response";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class ComentarioService{

  private readonly url = 'https://localhost:8000'
  private restService: RestService;
  private id_publicacion?: number;

  private token = {
    apiKey: localStorage.getItem('apiKey')
  };

  constructor(restService: RestService, private http: HttpClient,  private router:ActivatedRoute) {
    this.restService = restService;
  }

  listarComentarioPorIdPublicacion(id_publicacion:number){
   return this.restService.get<Comentario[]>(`${this.url}/api/comentario/listarPorIdPublicacion/${id_publicacion}`)
  }



  guardarComentario(json:string):Observable<any>{
    const headers = new HttpHeaders()
      .set('apiKey', `${this.token.apiKey}`)
      .set('Content-Type', 'application/json');


    return this.http.post(`${this.url}/api/comentario/guardar`, json, { headers })
      .pipe(
        catchError((error: any) => {
          // Manejar errores
          console.error('Error al enviar JSON', error);
          throw error;
        })
      );

  }

  borrarComentario(id:number){
    return this.restService.delete(`${this.url}/api/comentario/eliminar/${id}`)
  }


}
