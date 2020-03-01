import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  identificacion = null;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  guardarIdentificacion() {
    localStorage.setItem('identificacion', JSON.stringify(this.identificacion));
    this.navCtrl.navigateForward('/menu');
  }

}
