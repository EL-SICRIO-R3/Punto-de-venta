import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullLayoutRoutingModule } from './full-layout-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { HomeModule } from '../../modules/home/home.module';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';


@NgModule({
  declarations: [
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    FullLayoutRoutingModule,
    HomeModule,
    MenuLayoutComponent
  ]
})
export class FullLayoutModule { }
