import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  certificados: any = [];

  colors: any = {
    insignia: 'warning',
    certificacion: 'success',
    test: 'primary'
  };

  constructor(private barcodeScanner: BarcodeScanner, private api: ApiService, public toastController: ToastController) { }

  ngOnInit() {
  }

  async scan() {
    try {
      this.barcodeScanner.scan().then(async (data) => {
        const solicitud = JSON.parse(data.text);

        if (solicitud.type == 'certificado') {

          await this.api.getCertification(solicitud.txid).then(cert => {
            this.certificados = [cert];
          });

        } else if (solicitud.type == 'historial') {

          await this.api.getMyCertifications(solicitud.identificacion).then((cert: any) => {
            this.certificados = cert;

            this.certificados = cert.filter((e) => {
              return ((e.data.json.type == 'certificacion' && solicitud.certificados) ||
              (e.data.json.type == 'insignia' && solicitud.insignias) ||
              (e.data.json.type == 'test' && solicitud.test));
            });
          });

        }
      });
    } catch (error) {
      const toast = await this.toastController.create({
        message: error,
        duration: 2000
      });

      toast.present();
    }

  }

}
