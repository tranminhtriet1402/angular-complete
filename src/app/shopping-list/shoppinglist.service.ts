import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core'

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>()
  startedEditing = new EventEmitter<number>()
  private ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomoto', amount: 10 },
  ]

  getIngredients() {
    return this.ingredients
  }
  getIngredient(index: number) {
    return this.ingredients[index]
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientChanged.emit(this.ingredients.slice())
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient
    this.ingredientChanged.emit(this.ingredients.slice())
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1)
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}
