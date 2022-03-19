import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  /* miFormulario: FormGroup = new FormGroup ({
    'nombre'     : new FormControl('Memoria RAM') ,
    'precio'     : new FormControl(0) ,
    'existencias': new FormControl(5)  
  }); */

  /* Forma de no hacer tantos FormControl */
  miFormulario: FormGroup = this.formBuilder.group({
    nombre     : [ , [ Validators.required, Validators.minLength(3) ] ],
    precio     : [ , [ Validators.required, Validators.min(0) ] ],
    existencias: [ , [ Validators.required, Validators.min(0) ] ]
  });

  /* Inyectando el servicio de FormBuilder */
  constructor(private formBuilder: FormBuilder) { }

  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched
  }

  ngOnInit() {
    /* Estableciendo valores al formulario */
    this.miFormulario.reset({
      nombre     : 'Memoria RAM', 
      precio     : 800,
      existencias: 15
    })
  }

  valor() {
    return this.miFormulario.controls.precio.errors?.min?.actual
  }
  
  guardar() {
    if(this.miFormulario.invalid) {
      /* Mostrando mensajes de error si se aprieta el boton sin tocar los input */
      this.miFormulario.markAllAsTouched();
      return;
    }

    /* Resetea todos los input después de dar submit */
    this.miFormulario.reset();
  }
}
