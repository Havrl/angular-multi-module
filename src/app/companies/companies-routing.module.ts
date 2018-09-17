import { CompanyListComponent } from './components/company-list/company-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarLayoutComponent } from '../layout/navbar-layout/navbar-layout.component';

const routes: Routes = [
    {
        path: '', component: NavbarLayoutComponent, children: [
            { path: '', component: CompanyListComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompaniesRoutingModule {}
