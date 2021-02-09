import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Salad',
            'A tasty and healthy dinner, all in one!',
            'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg',
            [
                new Ingredient('Lettuce', 1),
                new Ingredient('Lime Slices', 2),
                new Ingredient('Avocado', 1),
            ]),
        new Recipe(
            'Yummy Chicken Parmesan',
            'Comfort food for all, a classic kitchen staple!',
            'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d',
            [
                new Ingredient('Chicken', 5),
                new Ingredient('Pasta Sauce', 1),
                new Ingredient('Mozzarella', 5),
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}