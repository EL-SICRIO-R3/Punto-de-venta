import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { NuevoPedidoComponent } from '../nuevo-pedido/nuevo-pedido.component';
import { AgregarPedidoComponent } from '../nuevo-pedido/agregar-pedido/agregar-pedido.component';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    HomeComponent,
    NuevoPedidoComponent,
    AgregarPedidoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule
  ],
  providers: [
    DialogService
  ]

})
export class HomeModule { }
