import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/request.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Result[] = [];

  constructor(private _home: HomeService) {}

  ngOnInit(): void {
    this._home.get().subscribe((resp) => {
      console.log(resp);
      this.movies = resp.results;
    });
  }
}
