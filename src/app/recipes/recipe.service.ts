import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sweet & sour pork',
      'Serve with egg noodles',
      'https://img.delicious.com.au/vglDPNQ-/w759-h506-cfill/del/2022/02/del_sweet-and-sour-pork-163983-1.jpg',
      [new Ingredient('Finely grated ginger', 1), new Ingredient('Pork scotch steaks', 6), new Ingredient('Chinkiang vinegar', 0.75)]
    ),
    new Recipe(
      'Neapolitan popsicles',
      'Whisk yoghurt & cream',
      'https://img.delicious.com.au/a4s8_NqZ/w759-h506-cfill/del/2021/10/neapolitan-popsicles-158585-2.jpg',
      [new Ingredient('Greek - style yoghurt', 1.25), new Ingredient('Icing sugar', 0.75), new Ingredient('Cocoa powder', 1)]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // Shallow Copy of recipes with slice(), for a Deep Copy use JSON.parse(JSON.stringify(recipes));
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
