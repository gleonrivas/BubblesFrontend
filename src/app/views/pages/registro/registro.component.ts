import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'moment';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public nombre?: string;
  public apellidos?: string;
  public email?: string;
  public telefono?: number;
  public contrasena?: string;
  public fechaNacimiento?: string;

  constructor(
    private readonly router:ActivatedRoute,
    private readonly rt: Router,
    private userService: UserService,
  ) {
    console.log(this)
  }

  public enviarUsuario() {

    const comentarioJSON = {
      nombre: this.nombre,
      password: this.contrasena,
      rol: "usuario",
      apellidos: this.apellidos,
      telefono: this.contrasena,
      email: this.email,
      fechaNacimiento: this.fechaNacimiento
    };


    this.userService.guardarUsuario(JSON.stringify(comentarioJSON)).subscribe(
      response => {
        // Manejar la respuesta de la petición
        console.log('Respuesta del servidor:', response);
      },
      error => {
        // Manejar el error de la petición
        console.error('Error al enviar JSON', error);
      }
    );

    console.log(JSON.stringify(comentarioJSON));
    this.rt.navigate(['/login']);
  }

}
