import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanySettingsRoutingModule } from './company-settings-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CompanySettingsRoutingModule
  ],
  declarations: [CompanyDetailsComponent]
})
export class CompanySettingsModule { }
