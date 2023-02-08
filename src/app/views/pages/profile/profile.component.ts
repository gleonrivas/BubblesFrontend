import {Component, Input} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {ActivatedRoute} from "@angular/router";
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";
import {Perfil} from "../../../shared/models/perfil/perfil.response";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public id: number = -1;
  public publicaciones: Publicacion[] = [];

  public perfil?:Perfil;
  constructor(private readonly userService: UserService, private readonly perfilService: PerfilesService,
              private readonly router: ActivatedRoute) {
  }

  ngOnInit() {
     this.router.paramMap.subscribe((value) => {
       const id = value.get('id');
       if (id !== null) {
         this.id = parseInt(id);
       }

       this.userService.listarPublicacionesPorUsuario(this.id).subscribe((data) => {
         this.publicaciones = data;
       })

       this.perfilService.PerfilPorId(this.id).subscribe((data)=>{
         this.perfil=data;
       })
     });
  }
}
