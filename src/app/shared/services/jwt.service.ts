import {Injectable, NgModule} from "@angular/core";
import jwt_decode from 'jwt-decode';
import {UserInfo} from "../models/auth/user-info";

@Injectable()
@NgModule()
export class JwtService {
  constructor() {
  }

  decodeToken(token: string): UserInfo {
    if (!token) {
      throw Error('El api key es nulo o vacío');
    }
    const decoded = jwt_decode<UserInfo>(token);

    return decoded;
  }

}
