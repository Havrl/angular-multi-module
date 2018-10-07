import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { companyDetailsReducer } from './company-settings/components/company-details/company-details.reducers';
import { companyListReducer } from './companies/components/company-list/company-list.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({ companies: companyListReducer, companyDetails: companyDetailsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
