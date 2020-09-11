import { AbstractControl } from '@angular/forms';

// set error message if input have any alphabate 
export function onlyNumber(control: AbstractControl): { [key: string]: any } | null {
    //const reg = /[A-Za-z]/.test(control.value);
    const reg = /^[a-zA-Z \-\']+/.test(control.value);


    return reg ? { 'onlyNumber_req': { value: control.value } } : null;
}