import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from '../services/contract.service';
import { ComplianceRule } from '../upload-contract/compliance-rule.model';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrl: './contract-details.component.css'
})
export class ContractDetailsComponent {
  contractId: any;
  loading = false;
  toxicityAnalysis: string | undefined;
  isCompliant: string | undefined;
  ruleBasedLegalCompliance: ComplianceRule[] | undefined;

  @Input() title: string | undefined;
  @Input() pagesNum: number | undefined;
  @Input() author: string | undefined;
  @Input() toxicity: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.contractId = this.route.params
    if (this.route.params) {
      this.loading = true;
      this.route.params.subscribe((params) => {
        const routeContractId = params['id'];
        if (routeContractId) {
          this.contractService.getContractById(routeContractId).subscribe(
            (contract) => {
              this.title = contract.title;
              this.pagesNum = contract.pagesNum;
              this.author = contract.author;
              this.author = contract.author;
              this.toxicityAnalysis = contract.toxicityAnalysis;
              this.isCompliant = contract.isCompliant;
              this.ruleBasedLegalCompliance = contract.ruleBasedLegalCompliance;
              this.loading = false;
            },
            (error) => {
              console.error(error);
              this.loading = false;
            }
          );
        }
      });
    }
  }
  downloadContract(): void {
    // Implement the logic to trigger the download of the contract
    // You may use the contractId to retrieve the contract file and initiate the download
    // After initiating the download, you can provide a success message to the user
    console.log('Downloading contract...');
  }

}
