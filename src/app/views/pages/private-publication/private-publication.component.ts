import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModelPerfil, Perfil, PerfilVacio } from 'src/app/shared/models/perfil/perfil.response';
import { Publicacion } from 'src/app/shared/models/publicacion/publicacion.response';
import {Comentario } from 'src/app/shared/models/comentario/comentario.response';
import { ComentarioService } from 'src/app/shared/services/comentario.service';
import { PerfilesService } from 'src/app/shared/services/perfiles.service';
import { PublicacionService } from 'src/app/shared/services/publicacion.service';
import { ComentarioComponent } from '../../components/comentario/comentario.component';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { JwtService } from 'src/app/shared/services/jwt.service';
import {LikesService} from "../../../shared/services/likes.service";

export enum VisibleSection {
  COMENTARIOS,
}
@Component({
  selector: 'app-private-publication',
  templateUrl: './private-publication.component.html',
  styleUrls: ['./private-publication.component.css']
})
export class PrivatePublicationComponent {

  public id_publicacion_pagina: number=0;
  public id_perfil_localStg = parseInt(localStorage.getItem('id_perfil')||'');
  public publicacion_pagina!: Publicacion;
  //public id_perfil_publicacion_pagina = this.publicacion_pagina!.id_perfil;
  public perfil_localStg?: Perfil;
  public comentarios: Comentario[] = new Array;
  public sideVisibility: VisibleSection = VisibleSection.COMENTARIOS;
  texto?: string;
  public lista_perfiles: Perfil[] = [];
  constructor(
    private readonly router:ActivatedRoute,
    private readonly rt: Router,
    private readonly publicacionService: PublicacionService,
    private readonly perfilService: PerfilesService,
    private readonly comentarioService: ComentarioService,
    private readonly likesService: LikesService,
    private jwt: JwtService
  ) {
  }


  ngOnInit(){

    this.router.paramMap.subscribe((value) => {
      const id = value.get('id');
      if (id != null) {
        this.id_publicacion_pagina = parseInt(id);
      }
      this.listaDeLikes();

      this.publicacionService.getPublicacionPorId(this.id_publicacion_pagina).subscribe((data) => {
        this.publicacion_pagina = data;
      })

      this.perfilService.perfilPorId(this.id_perfil_localStg).subscribe((data) => {
        this.perfil_localStg = data;
      })

      this.comentarioService.listarComentarioPorIdPublicacion(this.id_publicacion_pagina).subscribe((data) =>{
        this.comentarios = data;
      })




    });

  }

  listaDeLikes(){
    this.likesService.perfilesPorLikesPublicacion(this.id_publicacion_pagina).subscribe((data)=>{
      this.lista_perfiles = data;

    })
  }
  crearlike() {
    this.likesService.crearLikeaPublicacion(this.publicacion_pagina.id, this.id_perfil_localStg);

  }
  public get visibleSection(): typeof VisibleSection {
    return VisibleSection
  }

/*
  likeDislike(id_publicacion:number, id_perfil:number){
    if (true){
      this.
    }
  }*/

  public enviarMensaje() {

    console.log(
      'esto es id publicacion pagina '+this.id_publicacion_pagina,
      'esto es id localstg '+this.id_perfil_localStg,
      'esto es publicacion pagina '+this.publicacion_pagina.id,
      'esto es pefil local '+this.perfil_localStg!.id
    )

    //este comentario se sube a la bbdd
    const comentarioJSON = {
      texto: this.texto,
      id_perfil: this.id_perfil_localStg,
      id_publicacion: this.id_publicacion_pagina
    };

    //este comentario se añade a la lista local
    var comentarioLocal:Comentario = {
      id:0,
      texto:comentarioJSON.texto||'',
      id_perfil:this.id_perfil_localStg,
      id_publicacion:this.id_publicacion_pagina,
    }


    if (this.texto!=''||null){

      this.comentarios.unshift(comentarioLocal);
      this.comentarioService.guardarComentario(JSON.stringify(comentarioJSON)).subscribe(
        response => {
          // Manejar la respuesta de la petición
          console.log('Respuesta del servidor:', response);
        },
        error => {
          // Manejar el error de la petición
          console.error('Error al enviar JSON', error);
        }
      );

      this.texto='';

    } else {
      console.log('No se ha escrito un mensaje')
    }
  }

  eliminarPublicacion(id_perfil_publicacion:number){
    if (id_perfil_publicacion == this.id_perfil_localStg){
      this.publicacionService.eliminarPublicacion(this.id_publicacion_pagina).subscribe({
        next: (data) => {
        },
        error: console.error
      })

      this.rt.navigate(['/perfil/',this.id_perfil_localStg])

    }

  }

}
