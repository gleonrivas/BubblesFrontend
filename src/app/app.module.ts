import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import { FormsModule } from '@angular/forms';
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
import { PublicPublicationComponent } from './views/pages/public-publication/public-publication.component';
import { PrivatePublicationComponent } from './views/pages/private-publication/private-publication.component';
import { ElegirPerfilComponent } from './views/pages/elegir-perfil/elegir-perfil.component';
import { LogoutComponent } from './views/pages/logout/logout.component';


const appRoutes:Routes=[
  {path: '', component: ElegirPerfilComponent},
  {path: 'elige_perfil', component: ElegirPerfilComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil/:id', component: ProfileComponent},
  {path: 'editarperfil', component: EditarPerfilComponent},
  {path: 'publicacion/:id', component: PrivatePublicationComponent},
  {path: 'logout', component: LogoutComponent},
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
    EditarPerfilComponent,
    BotonSeguidoresComponent,
    PublicPublicationComponent,
    PrivatePublicationComponent,
    ElegirPerfilComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [RestService, UserService, PerfilesService, PublicacionService, SeguidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
