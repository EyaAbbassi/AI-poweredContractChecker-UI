import { Component } from '@angular/core';

interface Comment {
  user: string;
  userPhoto: string; // URL to the user's photo
  text: string;
}

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.css'
})
export class CommentSectionComponent {
  comments: Comment[] = [
    { user: 'Nate', userPhoto: '../../assets/collaborator2.png', text: 'This is an effective comment!' },
    { user: 'Eva', userPhoto: '../../assets/collaborator3.png', text: 'Another insightful comment about the contract.' },
  ];

  newCommentText: string = '';

  addComment(): void {
    if (this.newCommentText.trim() !== '') {
      const newComment: Comment = {
        user: 'Eya',
        userPhoto: '../../assets/eya.jpg',
        text: this.newCommentText.trim(),
      };

      this.comments.push(newComment);
      this.newCommentText = '';
    }
  }
}
