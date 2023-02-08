import {Component, Input} from '@angular/core';
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {

  @Input() publicacion?: Publicacion;

}
