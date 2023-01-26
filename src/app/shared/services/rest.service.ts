import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RestService {

  constructor(private http:HttpClient) {

  }
  public get<T=Object>(url:string){
    return this.http.get<T>(url);
  }

  public post<T=Object, K=Object>(url: string, body: K) {
    return this.http.post<T>(url, body);
  }

  public put() {

  }

  public delete() {

  }

  public patch() {

  }
}
