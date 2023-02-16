import {Component} from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Perfil} from "../../../shared/models/perfil/perfil.response";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {JwtService} from "../../../shared/services/jwt.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";


  public loginError: boolean = false;

  public perfiles: Perfil[] = [];

  constructor(public readonly authService: AuthService, private readonly router: Router,
              private jwtService: JwtService) {
  }


  ngOnInit() {

  }

  onEmailInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email = target.value;
  }

  onPasswordInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  login() {
    this.authService.login({
      email: this.email,
      password: this.password,
    }).subscribe({
      complete: () => {
        const token = localStorage.getItem('apiKey') || '';
        const infouser = this.jwtService.decodeToken(token);
        this.router.navigateByUrl(`/perfiles/${infouser.user_id}`);
      },
      error: () => {
        this.loginError = true
      }
    })
  }

}
