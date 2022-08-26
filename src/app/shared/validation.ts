import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidationService } from '../services/validation.service';

export class AccountValidation {
  static existAccount(_validationService: ValidationService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return _validationService
        .existAccount(control.value)
        .pipe(map((result: any) => (result ? result : null)));
    };
  }
}
