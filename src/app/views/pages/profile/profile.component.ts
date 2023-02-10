import {Component, Input} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {ActivatedRoute} from "@angular/router";
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";
import {Perfil} from "../../../shared/models/perfil/perfil.response";
import {Seguidor} from "../../../shared/models/perfil/perfilSeguidor.response";
export enum VisibleSection{
  FOLLOWERS,
  BUBBLES,
  FOLLOWING,
  FAVORITES,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  public id: number = -1;
  public publicaciones: Publicacion[] = [];

  public seguidores: Seguidor[]= [];
  public sideVisibility: VisibleSection= VisibleSection.BUBBLES;


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

       this.perfilService.perfilPorId(this.id).subscribe((data)=>{
         this.perfil=data;
       })

       this.perfilService.seguidoresPorId(this.id).subscribe((data)=>{
         this.seguidores=data;
       })
     });
  }

  verBubbles(){
  this.sideVisibility= VisibleSection.BUBBLES
  }
  verfavoritos(){
    this.sideVisibility= VisibleSection.FAVORITES
  }

  verSeguidores(){
    this.sideVisibility= VisibleSection.FOLLOWERS
  }
  verSeguidos(){
    this.sideVisibility= VisibleSection.FOLLOWING
  }

  public get visibleSection(): typeof VisibleSection{
    return VisibleSection
  }
}
