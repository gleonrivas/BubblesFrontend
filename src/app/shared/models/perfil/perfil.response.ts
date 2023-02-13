export type Perfil = {
  id: number;
  descripcion: string;
  username: string;
  tipoCuenta: string;
  fotoPerfil: string;
}

export const PerfilVacio: Perfil = {
  id: -1,
  descripcion: "",
  username: "",
  fotoPerfil: "",
  tipoCuenta: ""
}
