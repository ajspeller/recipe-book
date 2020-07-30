import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipe(recipe): void {
    this.recipeService.getSelectedRecipe().emit(recipe);
  }

  getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
