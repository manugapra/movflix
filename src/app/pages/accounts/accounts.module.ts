import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountsComponent],
  imports: [CommonModule, AccountsRoutingModule, ReactiveFormsModule],
})
export class AccountsModule {}
