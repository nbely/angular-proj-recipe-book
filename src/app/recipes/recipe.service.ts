import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Tasty Salad',
    //         'A tasty and healthy dinner, all in one!',
    //         'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg',
    //         [
    //             new Ingredient('Lettuce', 1),
    //             new Ingredient('Lime Slices', 2),
    //             new Ingredient('Avocado', 1),
    //         ]),
    //     new Recipe(
    //         'Yummy Chicken Parmesan',
    //         'Comfort food for all, a classic kitchen staple!',
    //         'https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d',
    //         [
    //             new Ingredient('Chicken', 5),
    //             new Ingredient('Pasta Sauce', 1),
    //             new Ingredient('Mozzarella', 5),
    //         ])
    //   ];
    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}