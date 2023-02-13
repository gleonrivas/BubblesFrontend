import {Component, Input} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {ActivatedRoute} from "@angular/router";
import {SeguidorService} from "../../../shared/services/seguidor.service";

@Component({
  selector: 'app-boton-seguidores',
  templateUrl: './boton-seguidores.component.html',
  styleUrls: ['./boton-seguidores.component.css']
})
export class BotonSeguidoresComponent {

  public siguiendo: boolean = true;

  @Input() id_seguidor: number = -1; //para darle un valor en el html

  @Input() id_perfil: number = -1;

  constructor(private readonly userService: UserService, private readonly perfilService: PerfilesService,
              private readonly seguidorService: SeguidorService,
              private readonly router: ActivatedRoute) {
  }


  seguirDejarDeSeguir() {
    if (this.siguiendo == false) {
      this.siguiendo = true;

    } else {
      this.seguidorService.dejarDeSeguir(this.id_perfil, this.id_seguidor).subscribe({
        next: (data) => {
          console.log(data)
          this.siguiendo = false;
        },
        error: console.error
      })
    }
  }


}
