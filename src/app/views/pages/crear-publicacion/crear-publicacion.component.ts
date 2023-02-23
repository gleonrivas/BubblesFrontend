import {Component} from '@angular/core';
import moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {PublicacionParaCrear} from "../../../shared/models/publicacion/PublicacionParaCrear";
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
type TipoPublicacion = "texto" | "imagen" ;
@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent {
  public readonly TIPOS_DE_PUBLICACION: TipoPublicacion[] = ['texto' , 'imagen' ];
  public id_perfil: number = -1;
  public tipo_publicacion: TipoPublicacion = "texto";
  public texto: string = "";
  public imagen: string = "";
  public tematica: string = "";
  public fecha_publicacion: string = this.fechaFormateada();
  public activa: boolean = true;
  public loginError: boolean = false;
  public publicationForm : FormGroup = this.form.group({

    texto: ['', [Validators.required, Validators.maxLength(500)]],
    imagen: ['', [Validators.required]],
    tematica: ['', [Validators.required]],
    tipo_publicacion: ['', [Validators.required]]

  })

  private publicacion: PublicacionParaCrear = {
    tipoPublicacion:this.tipo_publicacion,
    texto:this.texto,
    imagen:this.imagen,
    tematica: this.tematica,
    fechaPublicacion: this.fecha_publicacion,
    activa: this.activa,
    id_perfil: this.idPerfil(),

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
        this.id_perfil = parseInt(id);
      }
    });

  }

  idPerfil():number{
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
    console.log(this.publicationForm.value)
    this.publicationForm.reset()
  }


  fechaFormateada(): string {
    let nuevaFecha = moment();
    return nuevaFecha.format('YYYY-MM-DD hh:mm:ss')
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
    this.imagen = target.value;
  }

  guardarPublicacion() {
    console.log(this.publicacion)

    this.publicacionService.crearPublicacion(this.publicacion).subscribe({
      complete: () => {
        this.route.navigateByUrl('/home')
      },
      error: () => {
        this.loginError = true
      }
    });
  }

}
