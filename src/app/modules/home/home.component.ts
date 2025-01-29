import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: '<router-outlet></router-outlet>',
    standalone: false
})
export class HomeComponent {
  items: any[] | undefined;

  home: any | undefined;

  ngOnInit() {
  }
}
