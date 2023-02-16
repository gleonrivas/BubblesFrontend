

export type PublicacionParaCrear = {

  tipoPublicacion: string;
  texto: string;
  imagen: string;
  tematica: string;
  fechaPublicacion: string;
  activa: boolean;
  id_perfil: number;

}
export type PublicacionParaCrearVacia = {

  tipoPublicacion: "";
  texto: "";
  imagen: "";
  tematica: "";
  fechaPublicacion: "";
  activa: true;
  id_perfil: -1;

}
