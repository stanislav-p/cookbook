import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class DeleteService {

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }

  deleteRecipe(recipe) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3000/api/recipes/'+recipe._id)
      .map(res => res.json());
  }

}
