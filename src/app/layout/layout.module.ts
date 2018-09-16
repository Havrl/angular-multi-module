import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { SubNavbarLayoutComponent } from './sub-navbar-layout/sub-navbar-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarLayoutComponent, SubNavbarLayoutComponent, NavbarComponent, SubNavbarComponent]
})
export class LayoutModule { }
