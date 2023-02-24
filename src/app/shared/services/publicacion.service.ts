import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";
import {PublicacionParaCrear} from "../models/publicacion/PublicacionParaCrear";
import {PublicacionRespuesta} from "../models/publicacion/Publicacion.respuesta";
import {FormBuilder} from "@angular/forms";

@Injectable()
export class PublicacionService{
  private readonly url = 'https://localhost:8000'
  private restService: RestService;

  private form: FormBuilder;
  constructor(restService: RestService, private formBuilder: FormBuilder) {
    this.restService = restService;
    this.form = formBuilder;
  }

  public publicacionPorLikeDelPerfilId(id_perfil: number) {
    return this.restService.get<Publicacion[]>(`${this.url}/api/likePublicacion/listar/${id_perfil}`)
  }

  public getPublicacionPorId(id: number) {
    return this.restService.get<Publicacion>(`${this.url}/api/publicacion/${id}`)
  }

  public crearPublicacion(publicacion:PublicacionParaCrear) {
    return this.restService.post<PublicacionParaCrear, PublicacionRespuesta>(`${this.url}/api/publicacion/guardar`, publicacion)
  }

  public listarTodasPublicaciones() {
    return this.restService.get<Publicacion[]>(`${this.url}/api/publicacion/listar`)
  }
  public listarPublicacionesPorTematica(tematica:string) {
    return this.restService.get<Publicacion[]>(`${this.url}/api/publicacion/listar/tematica/${tematica}`)
  }
  public listarPublicacionesPorTipo(tipo:string) {
    return this.restService.get<Publicacion[]>(`${this.url}/api/publicacion/listar/tipo/${tipo}`)
  }

  public eliminarPublicacion(id: number) {
    return this.restService.delete<Publicacion>(`${this.url}/api/publicacion/${id}`)
  }

}
