import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";
import {LikesService} from "../../../shared/services/likes.service";

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {

  @Input() publicacion?: Publicacion;

  @Input() id_publicacion: number = -1;
  @Input() id_perfil: number = -1;
  public legusta : boolean = false;


  constructor(
    private readonly router: Router,
    private  readonly likesService: LikesService,
  ) {}
  ngOnInit(){
    this.checklike();
  }
  showPublicacion(id: number){
    this.router.navigateByUrl('/publicacion/'+id);
  }
  checklike() {
    this.likesService.comprobarlikes(this.id_publicacion, this.id_perfil).subscribe((data) => {
      this.legusta = data;
    })
  }


}
