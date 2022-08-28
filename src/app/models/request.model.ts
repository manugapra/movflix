import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export class RequestOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType: 'json';
  withCredentials?: boolean;
}

export class DiscoverRequest {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export class Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
