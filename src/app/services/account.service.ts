import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts: Account[] = [];

  constructor() {}

  /**
   *
   * @returns Array de cuentas
   */
  getAccounts() {
    this.accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    return this.accounts;
  }

  /**
   * Añade una nueva cuenta al array
   * @param account Nueva cuenta
   * @return Devuelve la lista de perfiles actualizadas
   */
  newAccount(account: Account) {
    if (this.accounts) {
      if (this.accounts.length === 5) {
        throw new Error('Se ha llegado al máximo de cuentas');
      }
      account.id = this.accounts.length + 1;
      this.accounts.push(account);
      localStorage.setItem('accounts', JSON.stringify(this.accounts));
      return this.accounts;
    }
  }
}
