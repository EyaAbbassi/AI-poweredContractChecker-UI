import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContractsComponent } from './contracts/contracts.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadContractComponent } from './upload-contract/upload-contract.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CollaboratorSectionComponent } from './collaborator-section/collaborator-section.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationDialog } from './contracts/delete-confirmation-dialog.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MainContentComponent,
    ContractsComponent,
    UploadContractComponent,
    ContractDetailsComponent,
    CommentSectionComponent,
    CollaboratorSectionComponent,
    DeleteConfirmationDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
