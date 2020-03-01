import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  API_URL:string = /*'https://menta.utp.edu.co'*/'http://192.168.0.15:3700/';

  constructor() { }
}
