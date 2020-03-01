import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiHistorialPageRoutingModule } from './mi-historial-routing.module';

import { MiHistorialPage } from './mi-historial.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiHistorialPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [MiHistorialPage]
})
export class MiHistorialPageModule {}
