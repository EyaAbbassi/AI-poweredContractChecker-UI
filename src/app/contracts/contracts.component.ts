import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialog } from './delete-confirmation-dialog.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: any[] = [];
  deleteMessage: string = '';
  count = 0;
  collaborators = [
    { name: 'Nate Doe', photo: '../../assets/collaborator2.png' },
    { name: 'Polina Doe', photo: '../../assets/collaborator1.png' },
    { name: 'Frank Doe', photo: '../../assets/collaborator4.png' },
    { name: 'Eva Doe', photo: '../../assets/collaborator3.png' },
  ];

  constructor(private contractService: ContractService, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getContracts();
  }

  viewContractDetails(contractId: string): void {
    this.router.navigate(['/contract-analysis', contractId]);
  }

  getContracts(): void {
    this.contractService.getAllContracts().subscribe(
      (data) => {
        this.contracts = data.contracts;
        this.count = data.count;
      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }

  openDeleteConfirmation(contractId: string, event: Event): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteConfirmationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteContract(contractId);
      }
    });
  }

  deleteContract(contractId: string): void {
    this.contractService.deleteContractById(contractId).subscribe(
      response => {
        this.deleteMessage = 'Contract deleted successfully.';
        this.getContracts();
        this.snackBar.open('Contract deleted successfully.', 'Close', { duration: 3000 });
      },
      error => {
        console.error(error);
        this.deleteMessage = 'Error deleting contract.';
      }
    );
  }
}
