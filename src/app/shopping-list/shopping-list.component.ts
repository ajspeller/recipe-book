import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Ingredient } from './models/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscriptions: Subscription[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe((i: Ingredient[]) => {
      this.getIngredients();
    });
  }

  getIngredients(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.ingredients);
  }

  addItem(item: Ingredient): void {
    this.shoppingListService.addIngredient(item);
    this.getIngredients();
  }

  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
