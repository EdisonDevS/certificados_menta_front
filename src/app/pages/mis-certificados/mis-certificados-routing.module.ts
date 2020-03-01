import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCertificadosPage } from './mis-certificados.page';

const routes: Routes = [
  {
    path: '',
    component: MisCertificadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCertificadosPageRoutingModule {}
