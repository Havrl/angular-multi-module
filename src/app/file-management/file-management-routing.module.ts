import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FileListComponent } from './components/file-list/file-list.component';
import { SubNavbarLayoutComponent } from '../layout/sub-navbar-layout/sub-navbar-layout.component';

const routes: Routes = [
    {
        path: '', component: SubNavbarLayoutComponent, children: [
            { path: ':companyId', component: FileListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FileManagementRoutingModule {}
