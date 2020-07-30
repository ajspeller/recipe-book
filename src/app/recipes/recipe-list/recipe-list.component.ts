import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Backyard Burger',
      'Backyard BBQ Burger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
    new Recipe(
      'Perfect Pancakes',
      'Homestyle buttermilk Pancakes',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-pancakes_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1562853903667.jpeg'
    ),
    new Recipe(
      'Brickoven Pizza',
      'Homemade cheese pizza',
      'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/cheese-slate-compressed.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  getRecipe(recipe): void {
    this.selectedRecipe.emit(recipe);
  }
}
