import { AbstractControl, FormGroup } from '@angular/forms';

export function GetFormControl(form: FormGroup, controlName: string[]): AbstractControl {
    return form.get(controlName) as AbstractControl;
}

export function GetFormControlErrors(form: FormGroup, controlName: string[], errorName: string): boolean {
    const formControl: AbstractControl = GetFormControl(form, controlName);
    if  (!controlName) return false;
    return formControl.hasError(errorName) && (formControl.dirty || formControl.touched);
}
