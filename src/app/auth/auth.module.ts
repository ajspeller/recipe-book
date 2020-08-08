import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, SharedModule],
  exports: [],
})
export class AuthModule {}
