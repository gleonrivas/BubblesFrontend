import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {AuthRequest} from "../models/auth/auth.request";
import {AuthResponse} from "../models/auth/auth.response";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private readonly url = 'https://localhost:8000'
  private restService: RestService;

  constructor(restService: RestService) {
    this.restService = restService;
  }

  login(data: AuthRequest) {
    return this.restService.post<AuthResponse, AuthRequest>(`${this.url}/api/login`, data).subscribe(
      (data) => localStorage.setItem("apiKey", data.token)
    );
  }

  logout() {

  }
}
