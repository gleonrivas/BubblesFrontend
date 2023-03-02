import {Component, Input} from '@angular/core';
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";
import {LikesService} from "../../../shared/services/likes.service";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {
  constructor( private readonly likesService: LikesService,) {
  }
  @Input() id_perfil?: number;
  @Input() id_publicacion?: number;

crearlike(){
  this.likesService.crearLikeaPublicacion(this.id_publicacion, this.id_perfil);
}
}
