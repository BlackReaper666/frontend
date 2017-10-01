import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Movie } from '../model/movie';

@Injectable()
export class MovieService {

  private movie;
  private url='http://localhost:8080/movies/1';

  constructor(private _http : Http) { 
   
  }

  getMovie() : Observable<Movie> {
    return this._http.get(this.url)
      .map(res=>res.json());
  }
}
