import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(private _accountService: AccountService) {}

  static nameValidator = (formControl: AbstractControl) => {
    if (!formControl.value) {
      return null;
    }

    if (formControl.value.match(/^[a-zA-ZáéíóúçÁÉÍÓÚÇüñÜÑ' ']+$/)) {
      return null;
    } else {
      return { notValidName: true };
    }
  };

  existAccount(input: string) {
    if (!input) {
      return of(null);
    }

    if (this._accountService.accounts.map((a) => a.name).includes(input)) {
      return of({ existAccount: true });
    } else {
      return of(null);
    }
  }
}
