import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {PerfilesService} from "../../../shared/services/perfiles.service";
import {Perfil} from "../../../shared/models/perfil/perfil.response";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublicacionParaCrear} from "../../../shared/models/publicacion/PublicacionParaCrear";

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {
  public id_perfil: number = -1;
  public perfil: Perfil = {
    id: -1,
    descripcion: '',
    username: '',
    tipoCuenta: '',
    fotoPerfil: '',
  }
  public perfilForm: FormGroup = this.form.group({

    file: [new FileReader()],
    username: [''],
    descripcion: ['']

  })

  constructor(private readonly route: ActivatedRoute, private readonly perfilService: PerfilesService,
              private form: FormBuilder, private readonly router: Router,) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');
      if (id !== null) {
        this.id_perfil = parseInt(id);
      }
      this.perfilService.perfilPorId(this.id_perfil).subscribe((data) => {
        this.perfil = data;
        console.log(this.perfil)

      })

    })

  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {

        this.perfilForm.controls['file'].setValue((<FileReader>event.target).result);
      }

      reader.readAsDataURL(event.target.files[0]);
    }

  }

  onSubmit() {

    this.perfil = {
      id: this.perfil.id,
      descripcion: this.perfilForm.controls['descripcion'].value,
      fotoPerfil: this.perfilForm.controls['file'].value,
      username: this.perfilForm.controls['username'].value,
      tipoCuenta: this.perfil.tipoCuenta,

    }
    this.editarPerfil(this.perfil)
  }

  editarPerfil(perfil: Perfil) {
    this.perfilService.editarPerfil(perfil).subscribe({
      complete: () => {
        this.router.navigateByUrl('/perfil/' + this.id_perfil)
      }
    });
  }
}
