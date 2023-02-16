import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PerfilesService} from "../../../shared/services/perfiles.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public id_perfil: number =-1;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');
      if (id !== null) {
        this.id_perfil = parseInt(id);
      }
    })


  }


}
