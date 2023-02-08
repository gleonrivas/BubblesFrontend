import { Component } from '@angular/core';
import {RestService} from "../../../shared/services/rest.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  localhost:string = "https://127.0.0.1:8000";
  constructor(private RestService:RestService) { }
  ngOnInit(): void{
    this.cargarDatos()
  }

  public cargarDatos(){

    /*let hola = this.RestService.get('https://api.publicapis.org/entries').subscribe();
    console.log(hola);*/

    this.RestService.get(this.localhost + '/api/usuario/listar').subscribe(respuesta => {console.log(respuesta)});
  }
}
