import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IOpcFiltroPedido, IProduct, opcFiltros, products } from '../../iterfaces/products.interface';

@Component({
    selector: 'app-nuevo-pedido',
    templateUrl: './nuevo-pedido.component.html',
    styleUrl: './nuevo-pedido.component.css',
    standalone: false
})
export class NuevoPedidoComponent {

  ref: DynamicDialogRef | undefined;
  public visible: boolean = false;
  public ocpFiltros: IOpcFiltroPedido[] = opcFiltros;
  public itemsProduct: IProduct[] = products;

  constructor(public dialogService: DialogService){}



  showDialog() {
    this.visible = true;
  }

  onSelectItem(item: IOpcFiltroPedido) {
    this.ocpFiltros.filter(x => x.id === item.id)[0].active = !item.active;
  }

}
