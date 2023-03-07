import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";
import { Lesigues } from "../models/le-sigues/lesigues.response";
import { Seguidor } from "../models/perfil/perfilSeguidor.response";

@Injectable()
export class SeguidorService {
  private readonly url = 'https://localhost:8000'
  private restService: RestService;

  constructor(restService: RestService) {
    this.restService = restService;
  }

  public eliminarSeguidor(id_principal: number, id_follower: number) {
    return this.restService.delete(`${this.url}/api/seguidor/eliminar/${id_principal}/${id_follower}`)
  }
  public seguir(id_principal: number, id_follower: number) {
    return this.restService.post<{}>(`${this.url}/api/seguidor/crear/${id_principal}/${id_follower}`, {})
  }

  public leSigues(id_principal: number, id_follower: number){
    return this.restService.get<Lesigues>(`${this.url}/api/siguiendo/${id_principal}/${id_follower}`)
  }

  public eliminarSeguido(id_principal: number, id_follower: number) {
    return this.restService.delete(`${this.url}/api/seguido/eliminar/${id_principal}/${id_follower}`)
  }

}
