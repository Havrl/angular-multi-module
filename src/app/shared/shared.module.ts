import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [],
  exports: [
      LayoutModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
