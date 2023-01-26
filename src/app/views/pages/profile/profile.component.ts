import { Component } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public id: number = -1;
  public publicaciones: Publicacion[] = [];
  constructor(private readonly userService: UserService, private readonly router: ActivatedRoute) {
  }

  ngOnInit() {
     this.router.paramMap.subscribe((value) => {
       const id = value.get('id');
       if (id !== null) {
         this.id = parseInt(id);
       }

       this.userService.listarPublicacionesPorUsuario(this.id).subscribe((data) => {
         this.publicaciones = data;
       })
     });
  }
}
