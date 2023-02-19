import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from 'src/app/shared/models/perfil/perfil.response';
import { Publicacion } from 'src/app/shared/models/publicacion/publicacion.response';
import { PerfilesService } from 'src/app/shared/services/perfiles.service';
import { PublicacionService } from 'src/app/shared/services/publicacion.service';

@Component({
  selector: 'app-private-publication',
  templateUrl: './private-publication.component.html',
  styleUrls: ['./private-publication.component.css']
})
export class PrivatePublicationComponent {

  public id: number=0;
  public id_perfil:number=0;
  public publicacion?: Publicacion;
  public perfil?: Perfil;

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly publicacionService: PublicacionService,
    private readonly perfilService: PerfilesService,
  ) {
    console.log(this)
  }


  ngOnInit(){
    this.activeRoute.paramMap.subscribe((value) => {
      const id = value.get('id');
      if (id !== null) {
        this.id = parseInt(id);
      }

      this.publicacionService.getPublicacionPorId(this.id).subscribe((data) => {
        this.publicacion = data;
        this.id_perfil=data.id_perfil;
      })
      this.perfilService.perfilPorId(this.id_perfil).subscribe((data) => {
        this.perfil = data;
      })

    });

  }



}
