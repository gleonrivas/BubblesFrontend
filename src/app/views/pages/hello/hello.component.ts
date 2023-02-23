import {Component} from '@angular/core';
import {RestService} from "../../../shared/services/rest.service";
import {Router} from "@angular/router";
import {JwtService} from "../../../shared/services/jwt.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  localhost: string = "https://127.0.0.1:8000";

  constructor(private jwtService: JwtService, private RestService: RestService, private readonly router: Router) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('apiKey');
    if (token != null) {
      const infouser = this.jwtService.decodeToken(token);
      this.router.navigateByUrl(`/perfiles/${infouser.user_id}`);
    } else {
      this.router.navigateByUrl('/login')
    }
  }
}
