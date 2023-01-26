import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import {RegistroComponent} from "./views/pages/registro/registro.component";
import {PerfilComponent} from "./views/pages/perfil/perfil.component";
import { HelloComponent } from './views/pages/hello/hello.component';
import { HomeComponent } from './views/pages/home/home.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { PublicacionComponent } from './views/components/publicacion/publicacion.component';
import {RestService} from "./shared/services/rest.service";
import {UserService} from "./shared/services/user.service";

const appRoutes:Routes=[
  {path: '', component: HelloComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil/:id', component: ProfileComponent},
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
    PerfilComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [RestService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
