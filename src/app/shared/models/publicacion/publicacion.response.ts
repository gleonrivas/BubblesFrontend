import { Perfil } from "../perfil/perfil.response";
import {Usuario} from "../usuario/usuario.response";


export type Publicacion = {
  id: number;
  tipoPublicacion: string;
  texto: string;
  imagen: string;
  tematica: string;
  fechaPublicacion: string;
  activa: boolean;
  id_perfil: Perfil;
}
