import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Perfil} from "../models/perfil/perfil.response";

@Injectable()
export class PerfilesService {
  private readonly url = 'https://localhost:8000'
  private restService: RestService;
  constructor(restService: RestService) {
    this.restService = restService;
  }

  public PerfilPorId(id: number) {
    return this.restService.get<Perfil>(`${this.url}/api/perfil/${id}`)
  }
}