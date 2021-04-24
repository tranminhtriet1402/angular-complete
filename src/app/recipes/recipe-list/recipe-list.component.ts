import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes!:Recipe[];
  

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeService.recipeSeleted.emit(recipe);
  }

}
