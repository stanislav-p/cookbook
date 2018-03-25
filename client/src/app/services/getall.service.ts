import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetAllService {

  constructor(
    private http: Http
  ) { }


  getAll() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/recipes')
      .map(res => res.json());
  }

}
