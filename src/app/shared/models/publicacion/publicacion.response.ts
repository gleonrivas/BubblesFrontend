import {Usuario} from "../usuario/usuario.response";


export type Publicacion = {
  id: number;
  tipoPublicacion: string;
  texto: string;
  imagen: string;
  tematica: string;
  fechaPublicacion: Date;
  activa: boolean;
  id_perfil: number;
}
