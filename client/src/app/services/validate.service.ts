import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRecipe(recipe) {
    if (recipe.name == undefined || recipe.description == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
