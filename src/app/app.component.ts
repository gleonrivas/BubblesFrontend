import { Component } from '@angular/core';
import {Timestamp} from "rxjs";
import {RestService} from "./rest.service";

export type Publicacion = {
  id: number;
  tipo_publicacion: string;
  texto: string;
  imagen: string;
  tematica: string;
  fecha_publicacion: Timestamp<string>;
  activa: boolean;
  usuario:Usuario;

}
export type Usuario = {
  id: number;
  nombre: string;
  apellidos: string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    './app.component.default.css',
    './app.component.desktop.css',
    './app.component.mobile.css']
})
export class AppComponent {
  title = 'frontendBubble';
  public listadePublicacion: Publicacion[] = []


  constructor(private RestService:RestService) {
  }

  ngOnInit():void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get<Publicacion[]>("http://127.0.0.1:8000/usuario/listar").subscribe((respuesta) =>{
      this.listadePublicacion = respuesta;
    })
  }
}


