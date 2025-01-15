import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullLayoutRoutingModule } from './full-layout-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { HomeModule } from '../../modules/home/home.module';


@NgModule({
  declarations: [
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    FullLayoutRoutingModule,
    HomeModule
  ]
})
export class FullLayoutModule { }
