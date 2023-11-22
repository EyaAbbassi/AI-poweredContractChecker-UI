import { Component } from '@angular/core';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  status: boolean = false;

  constructor(private toggleService: ToggleService) { }

  ngOnInit(): void {
    this.toggleService.sidebarStatus$.subscribe((status) => {
      this.status = status;
    });
  }
}
