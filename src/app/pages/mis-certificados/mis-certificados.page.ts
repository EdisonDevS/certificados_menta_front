import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.page.html',
  styleUrls: ['./mis-certificados.page.scss'],
})
export class MisCertificadosPage implements OnInit {

  certificados: any = [];
  certificadoSeleccionado: any = {txid: "0"};
  codigoCreado = null;

  constructor(private api: ApiService) {
    this.carga();
  }

  ngOnInit() {
  }


  async carga() {
    let id = localStorage.getItem('identificacion');
    
    await this.api.getMyCertifications(id).then(data => {
      this.certificados = data;
      console.log(data);
    });
  }


  seleccionarCertificado(certificado) {
    this.certificadoSeleccionado = certificado;
    this.codigoCreado = JSON.stringify({type: 'certificado', txid: this.certificadoSeleccionado.txid});
  }

}
