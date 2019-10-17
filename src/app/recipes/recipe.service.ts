import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test', 'ereyomi soup', './assets/recipe/a.jpeg', [
      new Ingredients('Meat', 1),
      new Ingredients('Fish', 4)
    ]),
    new Recipe('A ereyomi', 'Tasty', './assets/recipe/b.jpg', [
      new Ingredients('Beef', 30),
      new Ingredients('sweet', 4)
    ]),
    new Recipe('sola', 'fish soup', './assets/recipe/d.jpg', [
      new Ingredients('Rice', 1),
      new Ingredients('maggi', 4)
    ])
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addToIngredients(ingredients);
    console.log('recipeService', ingredients);
  }
}
