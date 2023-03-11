import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoutesRoutingModule } from './routes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    NgOptimizedImage,
    RouterModule
  ],
  exports: [
  ]
})
export class RoutesModule { }
