import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Company } from '../../shared/models/company.model';

@Injectable()
export class DataService {

  constructor(private apiService: ApiService) { }

  getCompanyList(): Observable<Array<Company>> {
    return this.apiService.get('/posts');
  }

  getCompanyDetail(companyId: number) {
    return this.apiService.get(`/posts/${companyId}`);
  }
}
