import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiHistorialPage } from './mi-historial.page';

const routes: Routes = [
  {
    path: '',
    component: MiHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiHistorialPageRoutingModule {}
