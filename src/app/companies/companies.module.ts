import { NgModule } from '@angular/core';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesRoutingModule } from './companies-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CompaniesRoutingModule
  ],
  declarations: [CompanyListComponent]
})
export class CompaniesModule { }
