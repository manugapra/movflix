import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../../models/request.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Result;

  constructor() {}

  ngOnInit(): void {}
}
