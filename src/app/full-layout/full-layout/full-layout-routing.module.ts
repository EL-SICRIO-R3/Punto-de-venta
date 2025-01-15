import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
