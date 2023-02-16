import {Component} from '@angular/core';
import moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicacionService} from "../../../shared/services/publicacion.service";
import {PublicacionParaCrear} from "../../../shared/models/publicacion/PublicacionParaCrear";
import {FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
type TipoPublicacion = "texto" | "imagen" | "texto e imagen";
@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent {
  public readonly TIPOS_DE_PUBLICACION: TipoPublicacion[] = ['texto' , 'imagen' , 'texto e imagen'];
  public id_perfil: number = -1;
  public tipo_publicacion: TipoPublicacion = "texto e imagen";
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

  })

  private publicacion: PublicacionParaCrear = {
    tipoPublicacion: this.tipo_publicacion,
    texto: this.texto,
    imagen: this.imagen,
    tematica: this.tematica,
    fechaPublicacion: this.fecha_publicacion,
    activa: this.activa,
    id_perfil: this.id_perfil
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

  onSubmit(){
    console.log(this.publicationForm.value);
    this.publicationForm.reset()
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


}
