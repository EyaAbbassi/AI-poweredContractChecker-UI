import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadContractComponent } from './upload-contract/upload-contract.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'upload-contract', component: UploadContractComponent, data: { breadcrumb: 'Upload Contract' } },
  { path: 'contract-analysis/:id', component: ContractDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
