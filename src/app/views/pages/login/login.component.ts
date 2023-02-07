import {Component} from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  password:string = "";

  constructor(public readonly authService: AuthService) {
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
    })
  }

}
