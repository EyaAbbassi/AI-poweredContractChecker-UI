import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  private status = false;

  toggleStatus(): void {
    this.status = !this.status;
  }

  getStatus(): boolean {
    return this.status;
  }
}
