import { Component, OnInit } from '@angular/core';
import { Ingredient } from './models/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.getIngredients();
    this.shoppingListService.getItemToAdd().subscribe((i: Ingredient) => {
      this.addItem(i);
      this.getIngredients();
    });
    this.shoppingListService.getItemToDelete().subscribe((i: Ingredient) => {
      this.deleteItem(i);
      this.getIngredients();
    });
  }

  addItem(item: Ingredient): void {
    this.shoppingListService.addItem(item);
  }

  deleteItem(item: Ingredient): void {
    this.shoppingListService.deleteItem(item);
  }

  getIngredients(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
