import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comentario } from "../models/comentario/comentario.response";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class ComentarioService{

  private readonly url = 'http://localhost:8000'
  private restService: RestService;
  private comentarios?: Comentario[] = [];
  private id_publicacion?: number;

  private apiKey = {
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
      .set('apiKey', `Bearer ${JSON.stringify(this.apiKey)}`)
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


}
