import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ContractResponse {
  contracts: any[];
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = 'http://localhost:5000/contracts';

  constructor(private http: HttpClient) {}

  getAllContracts(): Observable<ContractResponse> {
    return this.http.get<ContractResponse>(`${this.apiUrl}/all-contracts`);
  }

  deleteContractById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete-contract/${id}`);
  }

  uploadContract(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(`${this.apiUrl}/upload-contract`, formData);
  }

  getContractById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-contract/${id}`);
  }

  analyzeContract(contractId: string, analysisTypes: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/analyze-contract`, { contractId, analysisTypes });
  }
}
