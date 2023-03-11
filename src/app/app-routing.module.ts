import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //http://localhost:4200
    children: [
      {
        path: '',
        loadChildren: () => import('./routes/routes.module').then((m) => m.RoutesModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
