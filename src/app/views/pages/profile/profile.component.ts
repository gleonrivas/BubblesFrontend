import {Component, Input, SimpleChanges} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";
import {Perfil} from "../../../shared/models/perfil/perfil.response";
import {Seguidor} from "../../../shared/models/perfil/perfilSeguidor.response";
import {SeguidorService} from "../../../shared/services/seguidor.service";
import { ComentarioService } from 'src/app/shared/services/comentario.service';
import { Comentario, ComentarioPublicacion } from 'src/app/shared/models/comentario/comentario.response';
import { Lesigues } from 'src/app/shared/models/le-sigues/lesigues.response';

export enum VisibleSection {
  FOLLOWERS,
  BUBBLES,
  FOLLOWING,
  FAVORITES,
  TUSCOMENTARIOS
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  public id: number = -1;
  public id_perfil_localStg = parseInt(localStorage.getItem('id_perfil')!);
  public publicaciones: Publicacion[] = [];

  public publicacionesporLikes: Publicacion[] = [];

  public seguidores: Seguidor[] = [];
  public seguidos: Seguidor[] = [];
  public sideVisibility: VisibleSection = VisibleSection.BUBBLES;


  public followState: Lesigues = {};


  public perfil: Perfil |undefined;

  constructor(private readonly userService: UserService,
              private readonly perfilService: PerfilesService,
              private readonly publicacionService: PublicacionService,
              private readonly router: ActivatedRoute,
              private readonly rt: Router,
              private readonly seguidorService: SeguidorService,
              ) {

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

      this.perfilService.perfilPorId(this.id).subscribe((data) => {
        this.perfil = data;
      })

      this.perfilService.seguidoresPorId(this.id).subscribe((data) => {
        this.seguidores = data;
      })
      this.publicacionService.publicacionPorLikeDelPerfilId(this.id).subscribe((data) => {
        this.publicacionesporLikes = data
      })
      this.perfilService.seguidosPorId(this.id).subscribe((data) => {
        this.seguidos = data;
      })
      if (this.id != this.id_perfil_localStg){
        this.seguidorService.leSigues(this.id_perfil_localStg, this.id).subscribe((data) =>{
          this.followState = data;
        });
      }
    });

  }

  verBubbles() {
    this.sideVisibility = VisibleSection.BUBBLES
  }

  verfavoritos() {
    this.sideVisibility = VisibleSection.FAVORITES
  }

  verSeguidores() {
    this.sideVisibility = VisibleSection.FOLLOWERS
  }

  verSeguidos() {
    this.sideVisibility = VisibleSection.FOLLOWING
  }

  public get visibleSection(): typeof VisibleSection {
    return VisibleSection
  }

  verPerfil(id:number){
    this.perfilService.perfilPorId(id);
    this.rt.navigateByUrl('/perfil/'+id);

  }

  seguir(){
   this.seguidorService.seguir(this.id_perfil_localStg, this.id).subscribe((data)=> {
     console.log(data)
   });
    this.followState.mensaje = 'true';

  }
  dejarDeSeguir(){
    this.seguidorService.eliminarSeguido(this.id_perfil_localStg, this.id).subscribe((data)=> {
      console.log(data)
    });
    this.followState.mensaje = 'false';

  }

}
