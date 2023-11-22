import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private sidebarStatusSubject = new BehaviorSubject<boolean>(false);
  sidebarStatus$ = this.sidebarStatusSubject.asObservable();

  toggleSidebar() {
    this.sidebarStatusSubject.next(!this.sidebarStatusSubject.value);
  }
}
