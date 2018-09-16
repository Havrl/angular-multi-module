import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { FileManagementModule } from './file-management/file-management.module';
import { CompanySettingsModule } from './company-settings/company-settings.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CompanySettingsModule,
    FileManagementModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
