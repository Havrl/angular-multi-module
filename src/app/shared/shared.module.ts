import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SubNavbarComponent } from './layout/sub-navbar/sub-navbar.component';
import { NavbarLayoutComponent } from './layout/navbar-layout/navbar-layout.component';
import { SubNavbarLayoutComponent } from './layout/sub-navbar-layout/sub-navbar-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

  ],
  declarations: [
    NavbarComponent,
    SubNavbarComponent,
    NavbarLayoutComponent,
    SubNavbarLayoutComponent
  ],
  exports: [
    HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
