import { NgModule } from '@angular/core';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesRoutingModule } from './companies-routing.module';
import { AddCompanyComponent } from './components/add-company/add-company.component';

@NgModule({
  imports: [
    SharedModule,
    CompaniesRoutingModule
  ],
  declarations: [CompanyListComponent, AddCompanyComponent]
})
export class CompaniesModule { }
