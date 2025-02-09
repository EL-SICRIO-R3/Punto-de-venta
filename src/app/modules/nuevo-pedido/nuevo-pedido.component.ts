import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-nuevo-pedido',
    templateUrl: './nuevo-pedido.component.html',
    styleUrl: './nuevo-pedido.component.css',
    standalone: false
})
export class NuevoPedidoComponent {

  ref: DynamicDialogRef | undefined;
  public visible: boolean = false;
  
  constructor(public dialogService: DialogService){}



  showDialog() {
    this.visible = true;
  }

}
