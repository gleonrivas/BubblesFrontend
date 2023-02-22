import {Component} from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  password:string = "";
  public loginError: boolean = false;

  constructor(public readonly authService: AuthService,  private readonly router: Router) {
  }
  onEmailInput(event: Event){
    const target = event.target as HTMLInputElement;
    this.email = target.value;

  }
  onPasswordInput(event:Event){
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  login() {
    this.authService.login({
      email: this.email,
      password: this.password,
    }).subscribe({
      complete: () => {
        this.router.navigateByUrl('/perfil/'+1)
      },
      error: () => {
        this.loginError = true
      }
    })
  }
}
