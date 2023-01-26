import { Component } from '@angular/core';
import {RestService} from "./shared/services/rest.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    './app.component.default.css',
    './app.component.desktop.css',
    './app.component.mobile.css']
})
export class AppComponent {
  title = 'frontendBubble';
  constructor(private RestService:RestService) {
  }
}


