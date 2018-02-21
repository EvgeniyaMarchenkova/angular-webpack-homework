import { ReactiveFormsModule, NG_VALIDATORS, FormsModule, FormGroup, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
@Directive({
    selector: '[DateValidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: DateValidator,
            multi: true
        }
    ]
})
export class DateValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = this.dateValidator();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }

    dateValidator(): ValidatorFn {
        return (c: FormControl) => {
            const isValid = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(c.value);
            if (isValid) {
                return null;
            } else {
                return {
                    datevalidator: {
                        valid: false
                    }
                };
            }
        };
    }
}