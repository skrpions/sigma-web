import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ]
})
export class GuestModule { }
