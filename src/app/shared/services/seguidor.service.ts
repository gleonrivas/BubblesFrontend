import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";

@Injectable()
export class SeguidorService {
  private readonly url = 'https://localhost:8000'
  private restService: RestService;

  constructor(restService: RestService) {
    this.restService = restService;
  }

  public dejarDeSeguir(id_principal: number, id_follower: number) {
    return this.restService.delete(`${this.url}/api/seguidor/eliminar/${id_principal}/${id_follower}`)
  }
  public seguir(id_principal: number, id_follower: number) {
    return this.restService.delete(`${this.url}/api/seguidor/crear/${id_principal}/${id_follower}`)
  }
}
