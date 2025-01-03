import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UuidService {

  constructor() { }

  generateShortUUID(): string {
    return Array.from(crypto.getRandomValues(new Uint8Array(3)))
      .map(b => ('00' + b.toString(16)).slice(-2))
      .join('');
  }
}