import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistroComponent} from "./views/pages/registro/registro.component";
import { HelloComponent } from './views/pages/hello/hello.component';
import { HomeComponent } from './views/pages/home/home.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { PublicacionComponent } from './views/components/publicacion/publicacion.component';
import {RestService} from "./shared/services/rest.service";
import {UserService} from "./shared/services/user.service";
import { EditarPerfilComponent } from './views/pages/editar-perfil/editar-perfil.component';
import {PerfilesService} from "./shared/services/perfiles.service";
import {PublicacionService} from "./shared/services/publicacion.service";
import { BotonSeguidoresComponent } from './views/components/boton-seguidores/boton-seguidores.component';
import {SeguidorService} from "./shared/services/seguidor.service";
import { CrearPublicacionComponent } from './views/pages/crear-publicacion/crear-publicacion.component';
import {JwtService} from "./shared/services/jwt.service";
import { MostrarPerfilesComponent } from './views/pages/mostrar-perfiles/mostrar-perfiles.component';
import { PerfilComponent } from './views/components/perfil/perfil.component';


const appRoutes:Routes=[
  {path: '', component: HelloComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'home/:id_perfil', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil/:id', component: ProfileComponent},
  {path: 'editarperfil', component: EditarPerfilComponent},
  {path: 'perfiles/:id_usuario', component: MostrarPerfilesComponent},
  {path: 'crearPublicacion/:id_perfil', component: CrearPublicacionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    HelloComponent,
    ProfileComponent,
    BotonSeguidoresComponent,
    RegistroComponent,
    PublicacionComponent,
    EditarPerfilComponent,
    BotonSeguidoresComponent,
    CrearPublicacionComponent,
    MostrarPerfilesComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestService, UserService, PerfilesService, PublicacionService, SeguidorService, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
