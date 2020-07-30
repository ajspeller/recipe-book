import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  showRecipe(r: Recipe): void {
    this.recipe = r;
  }
}
