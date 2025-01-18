import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: any[] | undefined;

  home: any | undefined;

  ngOnInit() {
    this.items = [
      {
        title: 'Levantar Pedido',
        url: 'pedido'
      },
      {
        title: 'Registrar Platillo',
        url: 'registro'
      },
      {
        title: 'Reporte de Venta',
        url: 'reporte'
      },
      {
        title: 'Levantar Pedido',
        url: 'up'
      }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
