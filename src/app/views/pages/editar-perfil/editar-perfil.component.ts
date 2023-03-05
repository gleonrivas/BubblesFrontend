import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {Perfil, PerfilVacio} from "../../../shared/models/perfil/perfil.response";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublicacionParaCrear} from "../../../shared/models/publicacion/PublicacionParaCrear";
import {JwtService} from "../../../shared/services/jwt.service";

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  public id_perfil: number = -1;
  public perfil: Perfil = PerfilVacio;
  public perfilForm: FormGroup = this.form.group({

    file: [new FileReader()],
    username: [''],
    descripcion: ['']

  })

  constructor(private readonly route: ActivatedRoute, private readonly perfilService: PerfilesService,
              private form: FormBuilder, private readonly router: Router, private jwtService: JwtService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');
      if (id !== null) {
        this.id_perfil = parseInt(id);
      }
      this.perfilService.perfilPorId(this.id_perfil).subscribe((data) => {
        this.perfil = data;

      })

    })

  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {

        this.perfilForm.controls['file'].setValue((<FileReader>event.target).result);
        this.perfil.file = (<FileReader>event.target).result as string;
      }

      reader.readAsDataURL(event.target.files[0]);

    }

  }



  onSubmit() {
    console.log(this.perfil)
     if(this.perfilForm.controls['descripcion'].value != ""){
       this.perfil.descripcion = this.perfilForm.controls['descripcion'].value
     }

    if(this.perfilForm.controls['file'].value != ""){
      this.perfil.file = this.perfilForm.controls['file'].value
    }

    if(this.perfilForm.controls['username'].value != ""){
      this.perfil.username = this.perfilForm.controls['username'].value
    }
    this.editarPerfil(this.perfil)
  }
  eliminarPerfil(){
    if (window.confirm('Se perderán todos los datos del perfil ¿quiere continuar?')) {
      this.perfilService.eliminarPerfil(this.perfil.id).subscribe({complete: ()=>{
          this.navegarPerfiles();
        }})
    }
  }

  navegarPerfiles(){
    const token = localStorage.getItem('apiKey');
    if (token != null) {
      const infouser = this.jwtService.decodeToken(token);
      this.router.navigateByUrl(`/perfiles/${infouser.user_id}`);
    } else {
      this.router.navigateByUrl('/login')
    }
  }

  editarPerfil(perfil: Perfil) {
    this.perfilService.editarPerfil(perfil).subscribe({
      complete: () => {
        this.router.navigateByUrl('/perfil/' + this.id_perfil)
      }
    });
  }
}
