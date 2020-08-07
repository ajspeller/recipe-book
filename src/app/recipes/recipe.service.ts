import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Recipe } from './models/Recipe.model';
import { Ingredient } from '../shopping-list/models/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Backyard Burger',
      'Backyard BBQ Burger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [
        new Ingredient('beef', 10),
        new Ingredient('tomatoe', 13),
        new Ingredient('mayo', 43),
      ]
    ),
    new Recipe(
      'Perfect Pancakes',
      'Homestyle buttermilk Pancakes',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-pancakes_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1562853903667.jpeg',
      [
        new Ingredient('milk', 2),
        new Ingredient('eggs', 8),
        new Ingredient('syrup', 9),
      ]
    ),
    new Recipe(
      'Brickoven Pizza',
      'Homemade cheese pizza',
      'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/cheese-slate-compressed.jpg',
      [
        new Ingredient('tomatoe sauce', 4),
        new Ingredient('garlic', 7),
        new Ingredient('cheese', 21),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.find((r, idx) => idx === id);
  }

  moveToShoppingList(ingredients: Ingredient[]): void {
    ingredients.forEach((i) => {
      this.shoppingListService.addIngredient(i);
    });
  }

  addRecipe(recipe: Recipe): void {
    console.log(recipe);
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
