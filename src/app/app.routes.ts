import { Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout/full-layout.component';

export const routes: Routes = [
    { 
        path: '', 
        component: FullLayoutComponent,
        loadChildren: () => import('./full-layout/full-layout/full-layout.module').then(m => m.FullLayoutModule) 
    }
];
