import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {ModelPerfil, Perfil, PerfilDTO} from "../models/perfil/perfil.response";
import {Seguidor} from "../models/perfil/perfilSeguidor.response";
import {PublicacionRespuesta} from "../models/publicacion/publicacion.respuesta";
import {PerfilEditarRespuesta} from "../models/perfil/perfileditar.respuesta";

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
  public guardarPerfil(perfil:PerfilDTO) {
    return this.restService.post<PerfilDTO>(`${this.url}/api/perfil/guardar`, perfil )
  }

  public editarPerfil(perfil:Perfil) {
    return this.restService.post<Perfil>(`${this.url}/api/perfil/editar`, perfil )
  }

  public seguidoresPorId(id: number) {
    return this.restService.get<Seguidor[]>(`${this.url}/api/seguidores/listar/${id}`)
  }
  public perfilesPorUsuario(id_usuario:number) {
    return this.restService.get<Perfil[]>(`${this.url}/api/perfil/listarPorUsuarioId/${id_usuario}`)
  }

  public eliminarPerfil(id_perfil:number) {
    return this.restService.delete(`${this.url}/api/perfil/eliminar/${id_perfil}`)
  }

  public perfilPorUsername(username: string) {
    return this.restService.get<Perfil[]>(`${this.url}/api/buscandoPerfil/${username}`)
  }
  public perfilPorAtributos(username: string, descripcion:string, tipocuenta:string) {
    return this.restService.get<Perfil>(`${this.url}api/buscandoPerfil/${username}/${descripcion}/${tipocuenta}`)
  }

  public seguidosPorId(id: number) {
    return this.restService.get<Seguidor[]>(`${this.url}/api/seguidos/listar/${id}`)
  }

}
