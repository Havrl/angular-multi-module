import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private apiService: ApiService) { }

  getCompanyList() {
    return this.apiService.get('/posts');
  }

  getCompanyDetail(companyId: number) {
    return this.apiService.get(`/posts/${companyId}`);
  }
}
