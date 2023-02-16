import { Component } from '@angular/core';
import {Perfil, PerfilVacio} from "../../../shared/models/perfil/perfil.response";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public perfil: Perfil = PerfilVacio;

}
