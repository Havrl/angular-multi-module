import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { NavbarLayoutComponent } from '../shared/layout/navbar-layout/navbar-layout.component';

const routes: Routes = [
    {
        path: '', component: NavbarLayoutComponent, children: [
            { path: '', component: CompanyDetailsComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanySettingsRoutingModule {}
