import { Component, Input } from '@angular/core';
import {Perfil, PerfilVacio} from "../../../shared/models/perfil/perfil.response";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  @Input()  perfil?: Perfil = PerfilVacio;

  setIdPerfilEnLocalStorage(){
    localStorage.setItem('id_perfil', this.perfil!.id.toString())
  }
  
}
