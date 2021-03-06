import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();
 private  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('banana', 10),

    ];

    getIngredients()  {

      return this.ingredients.slice();
    }

  constructor() { }

addIngredient(ingredient: Ingredient) {

  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());
}

 addIngredients(ingredients: Ingredient[]) {
//   // tslint:disable-next-line:prefer-const
//   for (let ingredient of ingredients) {
// this.addIngredient(ingredient);
//   }
this.ingredients.push(...ingredients);
this.ingredientsChanged.emit(this.ingredients.slice());

}

}
