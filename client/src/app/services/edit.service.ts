import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class EditService {
  params: any;

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => this.params = params );
  }

  editRecipe(recipe) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/edit/'+this.params.id, recipe, { headers: headers })
      .map(res => res.json());
  }

}
