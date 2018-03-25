import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddService {

  constructor(
    private http: Http
  ) { }

  addRecipe(recipe) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/recipes/add', recipe, { headers: headers })
      .map(res => res.json());
  }
}
