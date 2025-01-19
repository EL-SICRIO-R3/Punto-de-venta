import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPedidoComponent } from '../nuevo-pedido/nuevo-pedido.component';

const routes: Routes = [
  {
    path: 'nuevo-pedido',
    component: NuevoPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
