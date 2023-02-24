import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/shared/models/comentario/comentario.response';
import { Perfil } from 'src/app/shared/models/perfil/perfil.response';
import { ComentarioService } from 'src/app/shared/services/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  @Input() perfil?: any;
  @Input() comentario?: Comentario;

}
