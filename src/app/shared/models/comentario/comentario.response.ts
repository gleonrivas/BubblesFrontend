import { Perfil } from "../perfil/perfil.response";
import { Publicacion } from "../publicacion/publicacion.response";

export type Comentario = {

  id:number;
  texto:string;
  id_perfil:number;
  id_publicacion?:number;

}

export type ComentarioPublicacion = {

  id:number;
  texto:string;
  id_perfil:Perfil;
  id_publicacion:Publicacion;

}


export class ModelComentario {
  private _id: number |undefined;
  private _texto: string |undefined;
  private _id_perfil: Perfil |undefined;
  private _id_publicacion: Publicacion |undefined;

  constructor() {
  }



  get id(): number |undefined {
    return this._id;
  }

  set id(value: number |undefined) {
    this._id = value;
  }

  get texto(): string |undefined {
    return this._texto;
  }

  set texto(value: string |undefined) {
    this._texto = value;
  }

  get id_perfil():Perfil  |undefined{
    return this._id_perfil;
  }
  set id_perfil(value:Perfil |undefined) {
    this._id_perfil = value;
  }

  get id_publicacion():Publicacion |undefined {
    return this._id_publicacion;
  }
  set id_publicacion(value:Publicacion |undefined) {
    this._id_publicacion = value;
  }
}


