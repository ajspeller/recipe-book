import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  moveToShoppingList(): void {
    this.recipeService.moveToShoppingList(this.recipe.ingredients);
  }
}
