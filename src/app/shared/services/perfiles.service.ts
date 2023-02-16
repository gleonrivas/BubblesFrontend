import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Perfil} from "../models/perfil/perfil.response";
import {Seguidor} from "../models/perfil/perfilSeguidor.response";

@Injectable()
export class PerfilesService {
  private readonly url = 'https://localhost:8000'
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
  public perfilesPorUsuario() {
    return this.restService.get<Perfil[]>(`${this.url}/api/perfil/listarPorUsuario/`)
  }
}
