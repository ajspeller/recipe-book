import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Recipe } from '../models/Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscriptions: Subscription[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipes();
    this.subscriptions.push(
      this.recipeService.recipesChanged.subscribe((r: Recipe[]) => {
        this.getRecipes();
      })
    );
  }

  getRecipes(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
