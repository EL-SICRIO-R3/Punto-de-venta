import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { ButtonModule } from 'primeng/button';


const _PIRME_COMPONENTS = [
  DynamicDialogModule,
  MenuModule,
  BreadcrumbModule,
  PanelMenuModule,
  DialogModule,
  IconFieldModule,
  InputIconModule,
  ButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ..._PIRME_COMPONENTS
  ]
})
export class PrimeNgModule { }
