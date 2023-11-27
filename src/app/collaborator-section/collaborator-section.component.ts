import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborator-section',
  templateUrl: './collaborator-section.component.html',
  styleUrl: './collaborator-section.component.css'
})
export class CollaboratorSectionComponent {
  collaborators = [
    { name: 'Nate Doe', photo: '../../assets/collaborator2.png' },
    { name: 'Polina Doe', photo: '../../assets/collaborator1.png' },
    { name: 'Frank Doe', photo: '../../assets/collaborator4.png' },
    { name: 'Eva Doe', photo: '../../assets/collaborator3.png' },
  ];

  addCollaborator() {
    //TODO Implement logic to add a new collaborator
  }
}
