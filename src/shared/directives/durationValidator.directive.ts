import { ReactiveFormsModule, NG_VALIDATORS, FormsModule, FormGroup, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
@Directive({
    selector: '[durationvalidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: DurationValidator,
            multi: true
        }
    ]
})
export class DurationValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = this.durationValidator();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }

    durationValidator(): ValidatorFn {
        return (c: FormControl) => {
            const isValid = /[0-9]+/.test(c.value);
            if (isValid) {
                return null;
            } else {
                return {
                    durationvalidator: {
                        valid: false
                    }
                };
            }
        };
    }
}