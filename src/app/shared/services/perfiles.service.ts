import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {ModelPerfil, Perfil} from "../models/perfil/perfil.response";
import {Seguidor} from "../models/perfil/perfilSeguidor.response";
import {map, Observable } from "rxjs";

@Injectable()
export class PerfilesService {
  private readonly url = 'http://localhost:8000'
  private restService: RestService;
  constructor(restService: RestService) {
    this.restService = restService;
  }

  public perfilPorId(id: number) {
    return this.restService.get<Perfil>(`${this.url}/api/perfil/${id}`)
  }

  public seguidoresPorId(id: number) {
    return this.restService.get<Seguidor[]>(`${this.url}/api/seguidores/listar/${id}`)
  }
  public perfilesPorUsuario(id_usuario:number) {
    return this.restService.get<Perfil[]>(`${this.url}/api/perfil/listarPorUsuarioId/${id_usuario}`)
  }
}
