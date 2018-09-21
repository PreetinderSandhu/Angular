import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

 private  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is Simply a test',
     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg' , [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries', 20)
     ]),
    new Recipe('A Test Recipe 2',
     'This is Simply a test 2',
     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg' ,
     [
       new Ingredient('Buns', 2),
       new Ingredient('Meat', 5)
     ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);

  }
}
