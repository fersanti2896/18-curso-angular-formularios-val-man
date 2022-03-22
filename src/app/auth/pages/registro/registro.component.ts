import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  /* Temporalmente */
  regexFullName: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerFersa(control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();
  
    return (valor === 'fersa') ? { fersa: true } : null 
  }

  miFormulario: FormGroup = this.fb.group({
    nombre  : [ '', [ Validators.required, Validators.pattern(this.regexFullName) ]],
    email   : [ '', [ Validators.required, Validators.pattern(this.emailPattern) ]],
    username: [ '', [ Validators.required, this.noPuedeSerFersa ] ]
  });

  constructor(private fb: FormBuilder) { }

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
