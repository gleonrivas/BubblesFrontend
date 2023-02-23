import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";
import {PublicacionParaCrear} from "../models/publicacion/PublicacionParaCrear";

@Injectable()
export class PublicacionService{
  private readonly url = 'https://localhost:8000'
  private restService: RestService;
  constructor(restService: RestService) {
    this.restService = restService;
  }

  public publicacionPorLikeDelPerfilId(id_perfil: number) {
    return this.restService.get<Publicacion[]>(`${this.url}/api/likePublicacion/listar/${id_perfil}`)
  }

  public getPublicacionPorId(id: number) {
    return this.restService.get<Publicacion>(`${this.url}/api/publicacion/${id}`)
  }

  public crearPublicacion(publicacion:PublicacionParaCrear) {
    return this.restService.post<PublicacionParaCrear>(`${this.url}/api/publicacion/guardar`, publicacion)
  }
}
