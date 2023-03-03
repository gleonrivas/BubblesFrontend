import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/shared/models/comentario/comentario.response';
import { Perfil } from 'src/app/shared/models/perfil/perfil.response';
import { Publicacion } from 'src/app/shared/models/publicacion/publicacion.response';
import { ComentarioService } from 'src/app/shared/services/comentario.service';
import { PerfilesService } from 'src/app/shared/services/perfiles.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  @Input() perfil?: any;
  @Input() comentario?: Comentario;

  public comentarios?:Comentario[];
  @Input() id_perfil_publicacion?: number;
  @Input() id_perfil_localStg?: number;

  constructor(private comentarioService:ComentarioService,
              private route:Router,
              private perfilService:PerfilesService) {
  }

  borrarComentario(id_comentario:number){
    if (this.id_perfil_publicacion == this.id_perfil_localStg){
      this.comentarioService.borrarComentario(id_comentario).subscribe({
        next: (data) => {
        },
        error: console.error
      })
      this.comentario!.texto = '🗑️ Comentario eliminado';

    } else if (this.comentario!.id_perfil == this.id_perfil_localStg){
      this.comentarioService.borrarComentario(id_comentario).subscribe({
        next: (data) => {
        },
        error: console.error
      })
      this.comentario!.texto = '🗑️ Tu comentario se ha eliminado';

    }
    
  }

  verPerfil(id:number){
    this.perfilService.perfilPorId(id);
    this.route.navigateByUrl('/perfil/'+id);

  }

}
