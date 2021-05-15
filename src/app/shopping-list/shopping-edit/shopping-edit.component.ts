import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from '../shoppinglist.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients!: Ingredient
  editMode = false
  clearMode = false
  editedItemIndex: any
  editedItem!: Ingredient
  @ViewChild('f') slForm!: NgForm
  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index
      this.editMode = true
      this.editedItem = this.shoppingListService.getIngredient(index)
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      })
    })
  }

  onAddItem(form: NgForm) {
    const value = form.value
    this.ingredients = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        this.ingredients,
      )
    } else {
      this.shoppingListService.addIngredient(this.ingredients)
    }
    this.editMode = false
    form.reset()
  }
  clearForm() {
    this.editMode = false
    this.slForm.reset()
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.clearForm()
  }
}
