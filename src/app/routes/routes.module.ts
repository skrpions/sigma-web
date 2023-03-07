import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    NgOptimizedImage,
  ],
  exports: [
    NgOptimizedImage
  ]
})
export class RoutesModule { }
