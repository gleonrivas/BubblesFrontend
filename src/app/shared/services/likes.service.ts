import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Perfil} from "../models/perfil/perfil.response";
import {PublicacionParaCrear} from "../models/publicacion/PublicacionParaCrear";
import {PublicacionRespuesta} from "../models/publicacion/publicacion.respuesta";

@Injectable()
export class LikesService {
  private readonly url = 'https://localhost:8000'
  private restService: RestService;
  constructor(restService: RestService) {
    this.restService = restService;
  }

  public perfilesPorLikesPublicacion(id_publicacion: number) {
    return this.restService.get<Perfil[]>(`${this.url}/api/like/listar/publicacion/${id_publicacion}`)
  }

  public crearLikeaPublicacion(id_publicacion?:number, id_perfil?:number) {
    return this.restService.post<{}>(`${this.url}/api/likepublicacion/guardar/${id_publicacion}/${id_perfil}`, {} ).subscribe({
      error(err) {
        console.error(err)

      }
    })
  }




}
