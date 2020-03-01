import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCertificadosPageRoutingModule } from './mis-certificados-routing.module';

import { MisCertificadosPage } from './mis-certificados.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCertificadosPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [MisCertificadosPage]
})
export class MisCertificadosPageModule {}
