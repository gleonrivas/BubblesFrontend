import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/shared/models/perfil/perfil.response';
import { Publicacion } from 'src/app/shared/models/publicacion/publicacion.response';
import {Comentario, ComentarioSinID } from 'src/app/shared/models/comentario/comentario.response';
import { ComentarioService } from 'src/app/shared/services/comentario.service';
import { PerfilesService } from 'src/app/shared/services/perfiles.service';
import { PublicacionService } from 'src/app/shared/services/publicacion.service';
import { ComentarioComponent } from '../../components/comentario/comentario.component';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { JwtService } from 'src/app/shared/services/jwt.service';

export enum VisibleSection {
  COMENTARIOS,
}
@Component({
  selector: 'app-private-publication',
  templateUrl: './private-publication.component.html',
  styleUrls: ['./private-publication.component.css']
})
export class PrivatePublicationComponent {

  public id: number=0;
  public id_perfil = parseInt(localStorage.getItem('id_perfil')||'');
  public id_publicacion?: number;
  public publicacion?: Publicacion;
  public perfil?: Perfil;
  public comentarios: Comentario[] = new Array;
  public sideVisibility: VisibleSection = VisibleSection.COMENTARIOS;
  texto?: string;

  constructor(
    private readonly router:ActivatedRoute,
    private readonly rt: Router,
    private readonly publicacionService: PublicacionService,
    private readonly perfilService: PerfilesService,
    private readonly comentarioService: ComentarioService,
    private jwt: JwtService
  ) {
    console.log(this)
  }


  ngOnInit(){
    this.router.paramMap.subscribe((value) => {
      const id = value.get('id');
      if (id != null) {
        this.id = parseInt(id);
      }

      this.publicacionService.getPublicacionPorId(this.id).subscribe((data) => {
        this.publicacion = data;
      })

      this.perfilService.perfilPorId(this.id_perfil).subscribe((data) => {
        this.perfil = data;
      })

      this.comentarioService.listarComentarioPorIdPublicacion(this.id).subscribe((data) =>{
        this.comentarios = data;
      })


    });

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

    //este comentario se sube a la bbdd
    const comentarioJSON = {
      texto: this.texto,
      id_perfil: this.id_perfil,
      id_publicacion: this.id
    };

    //este comentario se añade a la lista local
    var comentarioLocal:Comentario = {
      id:0,
      texto:comentarioJSON.texto||'',
      id_perfil:this.perfil,
      id_publicacion:this.id_publicacion,
    }


    if (this.texto!=''||undefined){

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


      /*const rutaActual = this.router.snapshot.url.join('/');
      this.rt.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.rt.navigate([rutaActual]);
      });*/

      this.texto='';



    } else {
      console.log('No se ha escrito un mensaje')
    }
  }

  borrarComentario(comentario:Comentario){
    if (this.perfil!.id == comentario.id_perfil!.id){
      
    }
  }

}
