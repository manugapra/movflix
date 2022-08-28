import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiscoverRequest, RequestOptions } from '../models/request.model';

// TODO: no subir este archivo hasta que haya backend
const MOVIESDB_API_KEY = '';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  request<T>(method: string, url: string, option: RequestOptions) {
    if (option && option?.params) {
      option.params = option.params.append('api_key', MOVIESDB_API_KEY);
    } else {
      option = { responseType: 'json' };
      let params = new HttpParams();
      params = params.set('api_key', MOVIESDB_API_KEY);
      option.params = params;
    }

    option.params = option.params
      .append('language', 'es-ES')
      .append('country', 'es')
      .append('include_adult', false);

    return this.http.request<T>(method, url, option);
  }
}
