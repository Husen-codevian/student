import { AbstractControl } from '@angular/forms';

// set error message if input have any number in string Or Blank Space
export function checkString(control: AbstractControl): { [key: string]: any } | null {
    const flag = /\d/.test(control.value); // check for the number
    const flag1 = /\s/g.test(control.value); // check for the Blank space

    if (flag) {
        return flag ? { 'forBiddenName': { value: control.value } } : null;
    }
    if (flag1) {
        return flag1 ? { 'forBiddenName_space': { value: control.value } } : null;
    }
}