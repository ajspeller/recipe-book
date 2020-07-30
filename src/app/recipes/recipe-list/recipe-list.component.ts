import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Backyard Burger',
      'How to make the best tasting Backyard Burger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
    new Recipe(
      'Backyard Burger',
      'How to make the best tasting Backyard Burger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
    new Recipe(
      'Backyard Burger',
      'How to make the best tasting Backyard Burger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
