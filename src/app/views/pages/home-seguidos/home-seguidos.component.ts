import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publicacion } from 'src/app/shared/models/publicacion/publicacion.response';
import { PublicacionService } from 'src/app/shared/services/publicacion.service';

@Component({
  selector: 'app-home-seguidos',
  templateUrl: './home-seguidos.component.html',
  styleUrls: ['./home-seguidos.component.css']
})
export class HomeSeguidosComponent {

  public id_perfil: number =-1;
  public publicacionesGlobales : Publicacion[] = [];

  public tematica:string = "personal";

  public publicacionesTematicas : Publicacion[] = [];

  public publicacionesTipo : Publicacion[] = [];
  public tipo:string = "imagen";

  constructor(private readonly route: ActivatedRoute, private readonly publicacionService: PublicacionService,) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');
      if (id !== null) {
        this.id_perfil = parseInt(id);
      }
    })

    this.publicacionService.listarTodasPublicaciones().subscribe((data) => {
      this.publicacionesGlobales = data
    })

    this.publicacionService.listarPublicacionesPorTematica(this.tematica).subscribe((data) => {
      this.publicacionesTematicas = data
    })

    this.publicacionService.listarPublicacionesPorTipo(this.tipo).subscribe((data) => {
      this.publicacionesTipo = data
    })


  }


}
