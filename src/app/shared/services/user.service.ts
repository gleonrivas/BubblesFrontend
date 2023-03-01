import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";
import {catchError, Observable } from "rxjs";
import { HttpClient, HttpHeaders}  from "@angular/common/http";

@Injectable()
export class UserService {
  private readonly url = 'http://localhost:8000'
  private restService: RestService;
  constructor(restService: RestService,
              private http: HttpClient) {
    this.restService = restService;
  }

  public listarPublicacionesPorUsuario(id: number) {
    return this.restService.get<Publicacion[]>(`${this.url}/api/publicacion/listar/${id}`)
  }

  guardarUsuario(json:string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post(`${this.url}/api/usuario/guardar`, json, httpOptions)
      .pipe(
        catchError((error: any) => {
          // Manejar errores
          console.error('Error al enviar datos', error);
          throw error;
        })
      );

  }

}
