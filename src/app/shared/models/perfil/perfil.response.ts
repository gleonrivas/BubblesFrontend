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

export class ModelPerfil{
  
  private _id: number | undefined;
  private _descripcion: string | undefined;
  private _username: string | undefined;
  private _tipoCuenta: string | undefined;
  private _fotoPerfil: string | undefined;


  constructor() {
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get descripcion(): string | undefined {
    return this._descripcion;
  }

  set descripcion(value: string | undefined) {
    this._descripcion = value;
  }

  get username(): string | undefined {
    return this._username;
  }

  set username(value: string | undefined) {
    this._username = value;
  }

  get tipoCuenta(): string | undefined {
    return this._tipoCuenta;
  }

  set tipoCuenta(value: string | undefined) {
    this._tipoCuenta = value;
  }

  get fotoPerfil(): string | undefined {
    return this._fotoPerfil;
  }

  set fotoPerfil(value: string | undefined) {
    this._fotoPerfil = value;
  }
}
