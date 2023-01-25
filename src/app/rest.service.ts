import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) {

  }
  public get<T=Object>(url:string){
    return this.http.get<T>(url);
  }
}
