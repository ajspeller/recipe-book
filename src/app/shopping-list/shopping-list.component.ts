import { Component, OnInit } from '@angular/core';
import { Ingredient } from './models/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('beef', 2),
    new Ingredient('lettuce', 2),
    new Ingredient('tomato', 2),
    new Ingredient('cheese', 2),
    new Ingredient('mayo', 2),
    new Ingredient('mustard', 2),
    new Ingredient('ketchup', 2),
    new Ingredient('onion', 2),
    new Ingredient('wheat bun', 1),
  ];
  constructor() {}

  ngOnInit(): void {}
}
