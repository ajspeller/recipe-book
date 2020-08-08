import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingListItemComponent,
  ],
  imports: [SharedModule, FormsModule, ShoppingListRoutingModule],
  exports: [],
})
export class ShoppingListModule {}
