import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/Recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getSelectedRecipe().subscribe((r: Recipe) => {
      this.recipe = r;
    });
  }
}
