import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeRoutingModule } from '../../modules/home/home-routing.module';
import { PrimeNgModule } from '../../modules/shared/prime-ng/prime-ng.module';
import { IMenu, itemsMenu } from '../../iterfaces/menu.interface';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { Router } from '@angular/router';

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
  

  public menuOptions: IMenu[] = itemsMenu

  constructor(private router: Router) {
    this.menuOptions[0].active = true;
  }


  ngOnInit() {

  };

  onSelectItem(item: IMenu){
    this.menuOptions.forEach(element => {
      element.active = false;
    });
    this.menuOptions.filter(x => x.label === item.label)[0].active = !item.active;
    this.router.navigate(['/home/pedidos']);
  }
}
