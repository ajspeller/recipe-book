import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params.id;
      this.getRecipeById(this.id);
    });
  }

  moveToShoppingList(): void {
    this.recipeService.moveToShoppingList(this.recipe.ingredients);
  }

  getRecipeById(id: number): Recipe {
    return (this.recipe = this.recipeService.getRecipeById(id));
  }
}
