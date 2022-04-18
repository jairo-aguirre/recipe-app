import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientsAdded = new Subject<Ingredient[]>(); //allowing to inform components about a new added ingredient

  constructor() { }

  getIngredients() {
    return JSON.parse(JSON.stringify(this.ingredients)); //Deep Copy of ingredients
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.next(this.ingredients.slice()) //Shallow Copy
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsAdded.next(this.ingredients.slice());
  }

}
