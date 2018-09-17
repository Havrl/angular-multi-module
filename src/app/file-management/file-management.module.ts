import { FileManagementRoutingModule } from './file-management-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FileListComponent } from './components/file-list/file-list.component';

@NgModule({
  imports: [
    SharedModule,
    FileManagementRoutingModule
  ],
  declarations: [FileListComponent]
})
export class FileManagementModule { }
