import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContractService } from '../services/contract.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})

export class MainContentComponent implements OnInit {
  contractsCounts: number = 0;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContracts();
  }

  getContracts(): void {
    this.contractService.getAllContracts().subscribe(
      (data) => {
        this.contractsCounts = data.count;
      },
      error => {
        console.error(error);
        // Handle error
      }
    );
  }
}
