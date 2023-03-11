import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './guest/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    /* loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule) */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
