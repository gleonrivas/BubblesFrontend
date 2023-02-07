import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class RestService {
  constructor(private http:HttpClient) {

  }

  private getHeaders() {
    const apiToken = localStorage.getItem("apiKey") || "";
    const headers = new HttpHeaders();
    return headers.set("apiKey", apiToken);
  }

  public get<T=Object>(url:string){
    return this.http.get<T>(url, {
      headers: this.getHeaders()
    });
  }

  public post<T=Object, K=Object>(url: string, body: K) {
    return this.http.post<T>(url, body, {
      headers: this.getHeaders()
    });
  }

  public put() {

  }

  public delete() {

  }

  public patch() {

  }
}
