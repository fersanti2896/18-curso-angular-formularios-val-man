import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nameFullPattern, noPuedeSerFersa } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre  : [ '', [ Validators.required, Validators.pattern(this.vs.nameFullPattern) ]],
    email   : [ '', [ Validators.required, Validators.pattern(this.vs.emailPattern) ]],
    username: [ '', [ Validators.required, this.vs.noPuedeSerFersa ] ]
  });

  constructor(private fb: FormBuilder, 
              private vs: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre  : 'Fernando Nicolas',
      email   : 'fersanti2896@gmail.com',
      username: 'fersanti2896'
    })
  }

  campoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
