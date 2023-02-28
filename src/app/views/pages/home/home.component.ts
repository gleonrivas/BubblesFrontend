import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public id_perfil: number = -1;
  public publicacionesGlobales: Publicacion[] = [];

  public listaTematica: string[] = [];

  public tematica: string = "";

  public publicacionesTematicas: Publicacion[] = [];

  public publicacionesTipo: Publicacion[] = [];
  public tipo: string[] = ["imagen", "texto"];

  public tipoRandom: string = "";


  constructor(private readonly route: ActivatedRoute, private readonly publicacionService: PublicacionService,) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');
      if (id !== null) {
        this.id_perfil = parseInt(id);
      }
    })
    this.publicacionService.listaDeTematicasSeguidas(this.id_perfil).subscribe((data) => {
      console.log(this.listaTematica = data);
      this.cambiotematica();
      this.publicacionService.listarPublicacionesPorTematica(this.tematica).subscribe((data) => {
        this.publicacionesTematicas = data
      })
    })
    this.publicacionService.listarTodasPublicaciones().subscribe((data) => {
      this.publicacionesGlobales = data
    })
    this.cambiotipo()
    this.publicacionService.listarPublicacionesPorTipo(this.tipoRandom).subscribe((data) => {
      this.publicacionesTipo = data
    })


  }

  cambiotematica() {
    this.tematica = this.listaTematica[Math.floor(Math.random() * this.listaTematica.length)];
  }
  cambiotipo() {
    this.tipoRandom = this.tipo[Math.floor(Math.random() * this.tipo.length)];
  }




}
