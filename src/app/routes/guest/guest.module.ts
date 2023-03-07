import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from 'src/app/core/services/translate.service';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './pages/home/home.component';

// Fx para traducir los textos de los componentes
export function translateFactory(provider: TranslateService){
 return () => provider.getData();
}

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BodyComponent,
        TranslatePipe
    ],
    imports: [
        CommonModule,
        GuestRoutingModule,
        ReactiveFormsModule,
        FormsModule,

    ]
})
export class GuestModule { }
