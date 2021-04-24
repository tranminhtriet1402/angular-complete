import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ingredients: Ingredient[]=[
    {name:'Apples',amount:5},
    {name:'Tomoto',amount:10}
  ];

  ngOnInit(): void {
  }
  onIngredientAdd(event:any){
    this.ingredients.push(event)

  }

}
