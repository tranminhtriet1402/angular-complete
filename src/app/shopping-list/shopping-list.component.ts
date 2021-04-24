import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
  }

}
