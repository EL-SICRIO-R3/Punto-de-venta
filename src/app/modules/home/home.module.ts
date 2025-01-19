import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { NuevoPedidoComponent } from '../nuevo-pedido/nuevo-pedido.component';


@NgModule({
  declarations: [
    HomeComponent,
    NuevoPedidoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule
  ]
})
export class HomeModule { }
