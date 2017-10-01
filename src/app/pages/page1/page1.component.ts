import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [MovieService]
})
export class Page1Component implements OnInit {
  public movie : Movie;

  constructor(private _movieService:MovieService) {
    
   }

  ngOnInit() {
    this._movieService.getMovie().subscribe(movie => {
      this.movie = movie;
    });
  }

}
