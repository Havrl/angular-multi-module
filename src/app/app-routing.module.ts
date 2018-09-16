import { CompanyListComponent } from './components/company-list/company-list.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'settings/:companyId', loadChildren: './company-settings/company-settings.module#CompanySettingsModule' },
  { path: 'files', loadChildren: './file-management/file-management.module#FileManagementModule' },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  // onSameUrlNavigation: ignore is the default param,
  // explicitly showing it here as if it would be set to always
  // then router.event change would fire twice in the company-settings and
  // company-folders components.
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
