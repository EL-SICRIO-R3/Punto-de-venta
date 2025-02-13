import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IOpcFiltroPedido, IOrder, IOrderProduct, IProduct, opcFiltros, products } from '../../iterfaces/products.interface';

@Component({
    selector: 'app-nuevo-pedido',
    templateUrl: './nuevo-pedido.component.html',
    styleUrl: './nuevo-pedido.component.css',
    standalone: false
})
export class NuevoPedidoComponent implements OnInit {

  ref: DynamicDialogRef | undefined;
  public visible: boolean = false;
  public ocpFiltros: IOpcFiltroPedido[] = opcFiltros;
  public itemsProduct: IProduct[] = products;
  public ordenActual: IOrder = {orderProduct:[],table: 1, total: 0} as IOrder
  

  constructor(public dialogService: DialogService){}

  ngOnInit(): void {
  }



  showDialog() {
    this.visible = true;
  }

  onSelectItem(item: IOpcFiltroPedido) {
    this.ocpFiltros.forEach(item => {
      item.active = false;
    })
    this.ocpFiltros.filter(x => x.id === item.id)[0].active = !item.active;
  }

  onAddProduct(product: IProduct){
    let order: IOrderProduct;
    let count = 1;

    if(this.ordenActual.orderProduct.filter(x=> x.products.id === product.id).length){
      this.ordenActual.orderProduct.filter(x=> x.products.id === product.id)[0].amount ++;
      return;
    }

    order = {
      products: product,
      amount: count
    }

    this.ordenActual.orderProduct.push(order)
  }

  onDeleteProduct(product: IProduct){
    let count = this.ordenActual.orderProduct.filter(x=> x.products.id === product.id)[0].amount - 1 
    
    if(count == 0){
      this.ordenActual.orderProduct = this.ordenActual.orderProduct.filter(x => x.products.id != product.id);
    }else{
      this.ordenActual.orderProduct.filter(x=> x.products.id === product.id)[0].amount --
    }
  }

}
