import { Component } from '@angular/core';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  status = false;

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    // Retrieve the initial status from the service
    this.status = this.toggleService.getStatus();
  }
}
