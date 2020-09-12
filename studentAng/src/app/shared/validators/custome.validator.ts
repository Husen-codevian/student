import { AbstractControl } from '@angular/forms';

export class CustomValidator {
    // Number only validation
    static numeric(control: AbstractControl): { [key: string]: any } | null {
        const val = control.value;
        if (val === null || val === '') { return null; }

        if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) { return { invalidNumber: true }; }

        return null;
    }
    // String Only Validation
    static string(control: AbstractControl): { [key: string]: any } | null {
        const val = control.value;
        if (val === null || val === '') { return null; }
        if (!val.toString().match(/^[a-zA-Z\s]*$/)) { return { invalidString: true }; }

        return null;
    }
}