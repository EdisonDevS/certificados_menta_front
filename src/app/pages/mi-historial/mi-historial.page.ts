import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-historial',
  templateUrl: './mi-historial.page.html',
  styleUrls: ['./mi-historial.page.scss'],
})
export class MiHistorialPage implements OnInit {

  cert: any;
  insig: any;
  test: any;

  codigoGenerado: any;

  constructor() { }

  isOneSelected()
  {
    return this.cert || this.insig || this.test;
  }

  generarCodigo() {
    let id = localStorage.getItem('identificacion');
    this.codigoGenerado = JSON.stringify({type: 'historial', identificacion: id, certificados: this.cert, insignias: this.insig, test: this.test});
  }

  ngOnInit() {
  }

}
