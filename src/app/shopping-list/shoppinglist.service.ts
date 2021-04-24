import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[]=[
        {name:'Apples',amount:5},
        {name:'Tomoto',amount:10}
      ];

      getIngredients(){
          return this.ingredients
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient)
      }
}