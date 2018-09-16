import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FileListComponent } from './components/file-list/file-list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [FileListComponent]
})
export class FileManagementModule { }
