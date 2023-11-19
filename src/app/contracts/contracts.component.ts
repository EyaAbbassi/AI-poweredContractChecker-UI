import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: any[] = [];
  deleteMessage: string = '';
  count = 0;

  constructor(private contractService: ContractService, private router: Router) {}

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

  deleteContract(contractId: string, event: Event): void {
    event.stopPropagation();
    const confirmDelete = confirm('Are you sure you want to delete this contract?');

    if (confirmDelete) {
      this.contractService.deleteContractById(contractId).subscribe(
        response => {
          this.deleteMessage = 'Contract deleted successfully.';
          this.getContracts();
        },
        error => {
          console.error(error);
          this.deleteMessage = 'Error deleting contract.';
        }
      );
    }
  }
}
