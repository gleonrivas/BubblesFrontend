import {Component} from '@angular/core';
import moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {PublicacionParaCrear} from "../../../shared/models/publicacion/PublicacionParaCrear";
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {Publicacion} from "../../../shared/models/publicacion/publicacion.response";

type TipoPublicacion = "texto" | "imagen" ;
@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent {
  public readonly TIPOS_DE_PUBLICACION: TipoPublicacion[] = ['texto' , 'imagen' ];
  public id_Perfil: number = -1;
  public tipo_publicacion: TipoPublicacion = "texto";
  public texto: string = "";
  public imagen: string  =  "";
  public tematica: string = "";

  public activa: boolean = true;
  public loginError: boolean = false;
  public publicationForm : FormGroup = this.form.group({

    texto: ['', [Validators.required, Validators.maxLength(500)]],
    file: ['', [Validators.required]],
    tematica: ['', [Validators.required]],
    tipo_publicacion: ['', [Validators.required]]

  })

  private publicacion: PublicacionParaCrear = {
    tipoPublicacion:"",
    texto:"",
    file:"",
    tematica: "",
    activa: this.activa,
    idPerfil: this.obtenerIdPerfil(),

  };


  constructor(private readonly router: ActivatedRoute,
              private readonly route: Router,
              private readonly publicacionService: PublicacionService,
              private form: FormBuilder) {
  }

  ngOnInit() {
    this.publicationForm;

    this.router.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');
      if (id !== null) {
        this.id_Perfil = parseInt(id);
      }
    });

  }

  obtenerIdPerfil():number{
    let idDevuelto = -1;
    this.router.paramMap.subscribe((value) => {
      const id = value.get('id_perfil');

      if (id !== null) {
         idDevuelto = parseInt(id);

      }
    });
    return idDevuelto;
  }

  onSubmit(){

    this.publicacion = {
      tipoPublicacion:this.publicationForm.controls['tipo_publicacion'].value,
      texto:this.publicationForm.controls['texto'].value,
      file:this.publicationForm.controls['file'].value.replace("C:\\fakepath\\", "private/var/tmp/"),
      tematica: this.publicationForm.controls['tematica'].value,
      activa: this.activa,
      idPerfil: this.obtenerIdPerfil(),
    }
    console.log(this.publicacion)
    this.guardarPublicacion(this.publicacion)
    this.publicationForm.reset()
  }


  onSelected(ev: Event): void {
    const target = ev.target as HTMLSelectElement
    this.tipo_publicacion = target.value as TipoPublicacion;
  }

  onTematicaInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.tematica = target.value;
  }
  onTextoInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.texto = target.value;
  }

    onImageInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.imagen = target.value.replace("C:\\fakepath\\", "");
  }

  guardarPublicacion(publicacion: PublicacionParaCrear) {
    console.log(publicacion)
    this.publicacionService.crearPublicacion(publicacion).subscribe({
      complete: () => {
        this.route.navigateByUrl('/home')
      },
      error: () => {
        this.loginError = true
      }
    });
  }


}
