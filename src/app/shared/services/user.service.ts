import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Publicacion} from "../models/publicacion/publicacion.response";

@Injectable()
export class UserService {
  private readonly url = 'http://localhost:8000'
  private restService: RestService;
  constructor(restService: RestService) {
    this.restService = restService;
  }

  public listarPublicacionesPorUsuario(id: number) {
    return this.restService.get<Publicacion[]>(`${this.url}/publicacion/listar/${id}`)
  }
}
