import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './models/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private itemToAdd = new Subject<Ingredient>();
  private itemToDelete = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('beef', 2),
    new Ingredient('lettuce', 2),
    new Ingredient('tomato', 2),
    new Ingredient('cheese', 2),
    new Ingredient('mayo', 2),
    new Ingredient('mustard', 2),
    new Ingredient('ketchup', 2),
    new Ingredient('onion', 2),
    new Ingredient('wheat bun', 1),
  ];
  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addItem(item: Ingredient): void {
    const itemIndex = this.ingredients.findIndex(
      (i) => i.name.toLowerCase() === item.name.toLowerCase()
    );
    if (itemIndex > -1) {
      this.ingredients[itemIndex].amount += item.amount;
    } else {
      this.ingredients = [...this.ingredients, item];
    }
  }

  deleteItem(item: Ingredient): void {
    this.ingredients = this.ingredients.filter((i) => i.name !== item.name);
  }

  getItemToAdd(): Subject<Ingredient> {
    return this.itemToAdd;
  }

  getItemToDelete(): Subject<Ingredient> {
    return this.itemToDelete;
  }
}
