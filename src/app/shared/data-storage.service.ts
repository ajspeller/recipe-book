import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Recipe } from '../recipes/models/Recipe.model';

import { AuthService } from './../auth/auth.service';

import { RecipeService } from './../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private url = `https://recipe-book-179de.firebaseio.com/`;

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put<Recipe[]>(`${this.url}/recipes.json`, recipes)
      .subscribe((res: Recipe[]) => {
        console.log(res);
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.url}recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
