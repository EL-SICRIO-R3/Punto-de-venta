import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';



const _PIRME_COMPONENTS = [
  DynamicDialogModule,
  MenuModule,
  BreadcrumbModule,
  PanelMenuModule,
  DialogModule
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
