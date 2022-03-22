import { FormControl } from '@angular/forms';

export const nameFullPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern   : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerFersa = (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();
  
    return (valor === 'fersa') ? { fersa: true } : null 
}