import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {Perfil, PerfilDTO, PerfilDTOVacio, PerfilVacio} from "../../../shared/models/perfil/perfil.response";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublicacionParaCrear} from "../../../shared/models/publicacion/PublicacionParaCrear";
import {JwtService} from "../../../shared/services/jwt.service";

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent {
  public id_perfil: number = -1;
  public perfil: PerfilDTO = PerfilDTOVacio;
  public  perfilCreado: Perfil = PerfilVacio;
  public perfilForm: FormGroup = this.form.group({

    file: [new FileReader()],
    username: [''],
    descripcion: ['']

  })
  public file = new FileReader();

  constructor(private readonly route: ActivatedRoute, private readonly perfilService: PerfilesService,
              private form: FormBuilder, private readonly router: Router, private jwtService: JwtService) {
  }

  ngOnInit() {


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

    this.perfil.descripcion = this.perfilForm.controls['descripcion'].value

    let file2 = this.perfilForm.controls['file'].value
    if(typeof file2 === "string"){
      this.perfil.file = this.perfilForm.controls['file'].value
    }else{
      this.perfil.file = ""
    }


    this.perfil.username = this.perfilForm.controls['username'].value
    this.perfil.tipoCuenta = "normal";

    console.log(this.perfil)
    this.guardar(this.perfil)
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

  guardar(perfil: PerfilDTO) {
    this.perfilService.guardarPerfil(perfil).subscribe({
      complete: () => {
        // hay que buscar el id dl perfil
        this.perfilService.perfilPorAtributos(perfil.username, perfil.descripcion, perfil.tipoCuenta).subscribe((data)=>{
          this.perfilCreado = data;
        });
        this.router.navigateByUrl('/perfiles/' +localStorage.getItem('id_usuario'))
      }
    });
  }
}
