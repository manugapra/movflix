import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DiscoverRequest } from '../models/request.model';
import { RequestService } from './request.service';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _request: RequestService) {}

  get() {
    const url = `${BASE_URL}/discover/movie`;
    return this._request.request<DiscoverRequest>('get', url, null);
  }
}
