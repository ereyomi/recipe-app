import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('orange', 6)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addToIngredients(ingredientss: Ingredients[]) {
    this.ingredients.push(...ingredientss);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
