import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgregarPedidoComponent } from './agregar-pedido/agregar-pedido.component';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.css'
})
export class NuevoPedidoComponent {

  ref: DynamicDialogRef | undefined;
  public visible: boolean = false;
  
  constructor(public dialogService: DialogService){}



  showDialog() {
    this.visible = true;
  }

}
