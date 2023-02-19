import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {

  @Input() publicacion?: Publicacion;
  constructor(
    private readonly router: Router,
  ) {}
  showPublicacion(id: number){
    this.router.navigateByUrl('/publicacion/'+id);
  }


}
