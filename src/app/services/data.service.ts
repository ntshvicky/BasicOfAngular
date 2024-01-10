import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAdminMessage(): string {
    return 'Welcome to Admin Page!';
  }

  getPublicMessage(): string {
    return 'Welcome to Public Page!';
  
  }
}
