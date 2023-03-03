import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/shared/models/perfil/perfil.response';
import { PerfilesService } from 'src/app/shared/services/perfiles.service';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent {

  public id_usuario = localStorage.getItem('id_usuario');
  public id_perfil = localStorage.getItem('id_perfil');

  public lista_perfiles:Perfil[] = new Array;
  public buscando:string = '';

  constructor(
    private perfilService:PerfilesService,
    private router:Router,
  ) {
  }

  buscar(){
    if (this.buscando == ''){
      this.lista_perfiles = []
      console.log(this.buscando)
      console.log('lista vacia')
    } else if (this.buscando != ''){
      this.perfilService.perfilPorUsername(this.buscando).subscribe((data) => {
        this.lista_perfiles = data;
        console.log(this.buscando)
        console.log(data)
        console.log(this.lista_perfiles)
      })
    }

  }

  verPerfil(id:number){
    this.buscando = '';
    this.lista_perfiles = [];
    this.router.navigate(['/perfil',id]);
  }


}
