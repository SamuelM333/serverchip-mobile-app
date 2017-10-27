import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: "[minlength]",
    providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }]
})
export class MinLengthDirective implements Validator {

    @Input() minlength: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return !control.value || control.value.length >= this.minlength ? null : { minlength: true };
    }

}

@Directive({
    selector: "[email]",
    providers: [{ provide: NG_VALIDATORS, useExisting: IsEmailDirective, multi: true }]
})
export class IsEmailDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        const valid = emailRegEx.test(control.value);

        return control.value < 1 || valid ? null : { email: true };
    }
}

@Directive({
    selector: "[ip]",
    providers: [{ provide: NG_VALIDATORS, useExisting: IsIPDirective, multi: true }]
})
export class IsIPDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } {
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const valid = ipRegex.test(control.value);

        return control.value < 1 || valid ? null : { ip: true };
    }
}
