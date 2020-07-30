import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './models/Recipe.model';
import { Ingredient } from '../shopping-list/models/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Backyard Burger',
      'Backyard BBQ Burger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [
        new Ingredient('beef', 1),
        new Ingredient('tomatoe', 3),
        new Ingredient('mayo', 1),
      ]
    ),
    new Recipe(
      'Perfect Pancakes',
      'Homestyle buttermilk Pancakes',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-pancakes_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1562853903667.jpeg',
      [
        new Ingredient('milk', 1),
        new Ingredient('eggs', 3),
        new Ingredient('syrup', 1),
      ]
    ),
    new Recipe(
      'Brickoven Pizza',
      'Homemade cheese pizza',
      'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/cheese-slate-compressed.jpg',
      [
        new Ingredient('tomatoe sauce', 1),
        new Ingredient('garlic', 3),
        new Ingredient('cheese', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getSelectedRecipe(): EventEmitter<Recipe> {
    return this.selectedRecipe;
  }

  moveToShoppingList(ingredients: Ingredient[]): void {
    ingredients.forEach((i) => {
      this.shoppingListService.addItem(i);
    });
  }
}
