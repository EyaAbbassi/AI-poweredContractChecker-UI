// delete-confirmation-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  template: `
    <h1 mat-dialog-title>Confirm Delete</h1>
    <div mat-dialog-content>Are you sure you want to delete this contract?</div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
    </div>
  `,
})
export class DeleteConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialog>) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
