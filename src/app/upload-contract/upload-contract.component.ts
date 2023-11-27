import { Component } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import { ComplianceRule } from './compliance-rule.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
@Component({
  selector: 'app-upload-contract',
  templateUrl: './upload-contract.component.html',
  styleUrls: ['./upload-contract.component.css'],
})
export class UploadContractComponent {
  pdfSrc: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  loading = false;
  analyzing = false;
  title: string | undefined;
  contractId: any;
  pagesNum: number | undefined;
  author: string | undefined;
  analysisOptions: string[] = ['Toxicity Analysis', 'Legal Compliance', 'Rule Based Legal Compliance'];
  selectedAnalysisType: string | undefined;
  analysisResult: any[] | undefined;

  toxicityAnalysis: string | undefined;
  isCompliant: string | undefined;
  ruleBasedLegalCompliance: ComplianceRule[] | undefined;

  constructor(private contractService: ContractService, private router: Router, private snackBar: MatSnackBar) { }


  onFileSelected(event: any): void {
    //const file: File = event.target.files[0];
    this.selectedFile = event.target.files?.[0] || null;
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Ensure that e.target?.result is defined before assigning it
        this.pdfSrc = e.target?.result || null;
      };
      reader.readAsArrayBuffer(this.selectedFile);
    } else {
      this.pdfSrc = null; // Handle the case when no file is selected
    }
  }

  uploadContract(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0) {
      this.loading = true;
      const file: File = fileInput.files[0];

      this.contractService.uploadContract(file).subscribe(
        (response) => {
          console.log(response.message);
          this.snackBar.open('Contract uploaded successfully!', 'Close', { duration: 3000 });
          this.contractId = response.contract.contractId;
          this.title = response.contract.title;
          this.pagesNum = response.contract.pagesNum;
          this.author = response.contract.author;
          this.loading = false;
        },
        (error) => {
          console.error(error);
          this.loading = false;
        }
      );
    }
  }

  viewContractDetails(contractId: string): void {
    this.router.navigate(['/contract-analysis', contractId]);
  }

  initiateAnalysis(): void {
    if (this.selectedAnalysisType) {
      this.analyzing = true;

      this.contractService.analyzeContract(this.contractId, [this.selectedAnalysisType]).subscribe(
        (response) => {
          console.log(response.message);
          this.analysisResult = response.result;
          this.updateContractDetails();
          this.analyzing = false;
        },
        (error) => {
          console.error(error);
          this.analyzing = false;
        }
      );
    }
  }
  private updateContractDetails(): void {
    if (this.contractId) {
      this.contractService.getContractById(this.contractId).subscribe(
        (response) => {
          console.log('Updated contract details');
          this.title = response.title;
          this.pagesNum = response.pagesNum;
          this.author = response.author;
          this.toxicityAnalysis = response.toxicityAnalysis;
          this.isCompliant = response.isCompliant;
          this.ruleBasedLegalCompliance = response.ruleBasedLegalCompliance;
        },
        (error) => {
          console.error('Error updating contract details:', error);
        }
      );
    }
  };

  downloadContract(): void {
    // Implement the logic to trigger the download of the contract
    // You may use the contractId to retrieve the contract file and initiate the download
    // After initiating the download, you can provide a success message to the user
    console.log('Downloading contract...');
  }
}
