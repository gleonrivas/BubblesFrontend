import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {RegistroComponent} from "./registro/registro.component";
import {PerfilComponent} from "./perfil/perfil.component";
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes:Routes=[
  {path: '', component: HelloComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: 'editarperfil', component: PerfilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    HelloComponent,
    ProfileComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
