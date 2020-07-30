import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() itemToAdd = new EventEmitter<Ingredient>();
  @Output() itemToDelete = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addItemVC(): void {
    const name = this.nameInputRef.nativeElement.value;
    const amount = +this.amountInputRef.nativeElement.value;
    if (!name || !amount) {
      return;
    }
    const newItem = new Ingredient(name, amount);
    this.itemToAdd.emit(newItem);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 1;
  }

  addItem({ value: name }, { value: amount }): void {
    if (!name || !amount) {
      return;
    }
    this.itemToAdd.emit(new Ingredient(name, +amount));
  }

  deleteItem({ value: name }, { value: amount }): void {
    if (!name) {
      return;
    }
    this.itemToDelete.emit(new Ingredient(name, +amount));
  }

  deleteItemVC(): void {
    const name = this.nameInputRef.nativeElement.value;
    if (!name) {
      return;
    }
    this.itemToDelete.emit(new Ingredient(name, 0));
  }

  clearFields(): void {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 1;
  }
}
