import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoPedidoRoutingModule } from './nuevo-pedido-routing.module';
import { NuevoPedidoComponent } from './nuevo-pedido.component';


@NgModule({
  declarations: [
    NuevoPedidoComponent
  ],
  imports: [
    CommonModule,
    NuevoPedidoRoutingModule
  ]
})
export class NuevoPedidoModule { }
