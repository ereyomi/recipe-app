import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  SelectedRecipe: Recipe;
  constructor(private RecipeService: RecipeService) {}

  ngOnInit() {
    try {
      this.RecipeService.recipeSelected.subscribe((recipe: Recipe) => {
        this.SelectedRecipe = recipe;
        console.log('SelectedRecipe', this.SelectedRecipe);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
