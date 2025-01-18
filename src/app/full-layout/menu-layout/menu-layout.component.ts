import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeRoutingModule } from '../../modules/home/home-routing.module';
import { PrimeNgModule } from '../../modules/shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-menu-layout',
  standalone: true,
  imports: [CommonModule,
      HomeRoutingModule,
      PrimeNgModule],
  templateUrl: './menu-layout.component.html',
  styleUrl: './menu-layout.component.css'
})
export class MenuLayoutComponent implements OnInit{
  

  public menuOptions = [
    { label: 'Nuevo Pedido', icon: 'pi pi-users',
      item: [
        {label: 'Para Comer Aqui', action: 'nuevo/comer-aqui'},
        {label: 'Para Lleavar', action: 'nuevo/llevar'}
      ],
    },
    { label: 'Registrar Platillo', icon: 'pi pi-users',
      item: [
        {label: 'Comida', action: 'registrar/comida'},
        {label: 'Bebida', action: 'registrar/bebida'}
      ],
    },
    { label: 'Registrar Empleado', action: 'registrar-empleado', icon: 'pi pi-users' },
    { label: 'Reporte de movimientos', action: 'reporte', icon: 'pi pi-users' },
    { label: 'Galeria', action: 'galeria', icon: 'pi pi-users' },
  ];

  constructor() {

  }


  ngOnInit() {

  }

}
