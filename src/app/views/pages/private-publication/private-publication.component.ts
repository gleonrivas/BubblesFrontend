import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/shared/models/perfil/perfil.response';
import { Publicacion } from 'src/app/shared/models/publicacion/publicacion.response';
import {Comentario } from 'src/app/shared/models/comentario/comentario.response';
import { ComentarioService } from 'src/app/shared/services/comentario.service';
import { PerfilesService } from 'src/app/shared/services/perfiles.service';
import { PublicacionService } from 'src/app/shared/services/publicacion.service';
import { ComentarioComponent } from '../../components/comentario/comentario.component';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

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
  public id_perfil:number=0;
  public id_publicacion?: number;
  public publicacion?: Publicacion;
  public perfil?: Perfil;
  public comentarios?: Comentario[];
  public sideVisibility: VisibleSection = VisibleSection.COMENTARIOS;
  public mapaComentario?: Map<Comentario, Perfil>
  texto?: string;

  constructor(
    private readonly router:ActivatedRoute,
    private readonly rt: Router,
    private readonly activeRoute: ActivatedRoute,
    private readonly publicacionService: PublicacionService,
    private readonly perfilService: PerfilesService,
    private readonly comentarioService: ComentarioService,
    private dataService: ComentarioService
  ) {
    console.log(this)
  }


  ngOnInit(){
    this.activeRoute.paramMap.subscribe((value) => {
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

    const comentarioJSON = {
      texto: this.texto,
      id_perfil: 2,
      id_publicacion: this.id
    };


    this.comentarioService.guardarComentario(JSON.stringify(comentarioJSON)).subscribe(
      response => {
        // Manejar la respuesta de la petición
        console.log('Respuesta del servidor:', response);
        this.rt.navigate(['/publicacion/'+this.id]);
      },
      error => {
        // Manejar el error de la petición
        console.error('Error al enviar JSON', error);
      }
    );

    console.log(JSON.stringify(comentarioJSON));
    this.rt.navigate(['/publicacion/'+this.id]);
  }

  eliminarPublicacion(){
    this.publicacionService.eliminarPublicacion(this.id).subscribe({
      next: (data) => {
      },
      error: console.error
    })
  }
}
