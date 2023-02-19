import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";

@Injectable()
export class PublicacionService{
  private readonly url = 'http://localhost:8000'
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
  
}
