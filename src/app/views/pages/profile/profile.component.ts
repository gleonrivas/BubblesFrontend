import {Component, Input} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {ActivatedRoute} from "@angular/router";
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";
import {Perfil, PerfilVacio} from "../../../shared/models/perfil/perfil.response";
import {Seguidor} from "../../../shared/models/perfil/perfilSeguidor.response";
import {SeguidorService} from "../../../shared/services/seguidor.service";

export enum VisibleSection {
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

  public publicacionesporLikes: Publicacion[] = [];

  public seguidores: Seguidor[] = [];
  public sideVisibility: VisibleSection = VisibleSection.BUBBLES;


  public perfil: Perfil = PerfilVacio;

  constructor(private readonly userService: UserService, private readonly perfilService: PerfilesService,
              private readonly publicacionService: PublicacionService,
              private readonly router: ActivatedRoute,
              private readonly seguidorService: SeguidorService) {
    console.log(this)
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
}
