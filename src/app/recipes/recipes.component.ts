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
  constructor() {}

  ngOnInit(): void {}
}
