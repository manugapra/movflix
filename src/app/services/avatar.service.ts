import { Injectable } from '@angular/core';
import * as fs from 'file-system';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  avatars: string[] = [];

  constructor() {
    this.getAvatars();
  }

  getAvatars() {
    this.avatars = [
      'avatar1.svg',
      'avatar2.svg',
      'avatar3.svg',
      'avatar4.svg',
      'avatar5.svg',
    ];
  }
}
