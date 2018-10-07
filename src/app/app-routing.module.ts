import { LoadGuard } from './core/guards/load-guard';
import { LoginComponent } from './core/components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth-guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'companies', canLoad: [LoadGuard], canActivate: [AuthGuard], loadChildren: './companies/companies.module#CompaniesModule' },
  { path: 'companies/:companyId/settings', canActivate: [AuthGuard], canLoad: [LoadGuard],
    loadChildren: './company-settings/company-settings.module#CompanySettingsModule' },
  { path: 'companies/:companyId/files', canActivate: [AuthGuard], canLoad: [LoadGuard],
    loadChildren: './file-management/file-management.module#FileManagementModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // onSameUrlNavigation: ignore is the default param,
  // explicitly showing it here as if it would be set to always
  // then router.event change would fire twice in the company-settings and
  // company-folders components.
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore', enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
