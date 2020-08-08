import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Ingredient } from './models/Ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('beef', 2),
    new Ingredient('lettuce', 4),
    new Ingredient('tomato', 6),
  ];
  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(id: number): Ingredient {
    return this.getIngredients()[id];
  }

  addIngredient(item: Ingredient): void {
    this.ingredients.push(item);
    this.ingredientChanged.next(this.getIngredients());
  }

  updateIngredient(index, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.getIngredients());
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.getIngredients());
  }
}
