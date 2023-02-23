import {Component} from '@angular/core';
import {Perfil} from "../../../shared/models/perfil/perfil.response";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mostrar-perfiles',
  templateUrl: './mostrar-perfiles.component.html',
  styleUrls: ['./mostrar-perfiles.component.css']
})
export class MostrarPerfilesComponent {
  constructor(private readonly perfilService: PerfilesService,
              private readonly router: ActivatedRoute,
  ) {
  }

  public perfiles: Perfil[] = [];

  private id_usuario: number = -1;


  ngOnInit(): void {
    this.router.paramMap.subscribe((value) => {
      const id = value.get('id_usuario');
      if (id !== null) {
        this.id_usuario = parseInt(id);
      }
      this.perfilService.perfilesPorUsuario(this.id_usuario).subscribe((data)=>{
        this.perfiles = data;
      });
    });

  }
}
