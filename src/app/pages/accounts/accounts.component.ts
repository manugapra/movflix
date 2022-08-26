import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountValidation } from 'src/app/shared/validation';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';
import { AvatarService } from '../../services/avatar.service';
import { ValidationService } from '../../services/validation.service';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  newAccountForm: FormGroup;
  avatars: string[] = [];
  currentAvatar: string;
  chooseAvatarError: boolean = false;
  modal: bootstrap.Modal;

  constructor(
    private _accountService: AccountService,
    private _avatarService: AvatarService,
    private _validationService: ValidationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.accounts = this._accountService.getAccounts();

    this.newAccountForm = new FormGroup({
      name: new FormControl(
        null,
        [Validators.required, ValidationService.nameValidator],
        [AccountValidation.existAccount(this._validationService)]
      ),
    });

    this.avatars = this._avatarService.avatars;
  }

  openModal() {
    if (!this.modal) {
      this.modal = new bootstrap.Modal('#newAccountModal');
    }
    this.modal.show();
  }

  saveNewAccount() {
    if (this.newAccountForm.invalid || !this.currentAvatar) {
      Object.keys(this.newAccountForm.controls).forEach(
        (control) => this.newAccountForm.get(control).markAsDirty
      );
      this.newAccountForm.markAllAsTouched();

      this.chooseAvatarError = true;

      return;
    }

    if (this.chooseAvatarError) {
      this.chooseAvatarError = false;
    }

    const newAccount: Account = {
      id: null,
      name: this.newAccountForm.get('name').value,
      avatar: this.currentAvatar,
    };

    try {
      this.accounts = this._accountService.newAccount(newAccount);
      this.modal.hide();
    } catch (err) {
      console.error(err);
    }
  }

  chooseAvatar(avatar: string) {
    this.currentAvatar = avatar;
    if (this.chooseAvatarError) {
      this.chooseAvatarError = false;
    }
  }

  goToManageAccounts() {
    // TODO: hacer redirección
  }

  chooseAccount(account: Account) {
    // TODO: mirar si hacer algo con el id del account en home
    this.router.navigateByUrl('/home');
  }
}
