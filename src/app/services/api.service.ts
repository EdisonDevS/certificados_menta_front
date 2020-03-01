import { Injectable } from '@angular/core';
import { EnvService } from './env/env.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions:any;
  
  constructor(private http: HttpClient, private env: EnvService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json'
      })
    };
  }

  getMyCertifications(id) {
    return new Promise(resolve => {
    this.http.post(this.env.API_URL + 'api/get_certifications_to', {identificacion: id}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCertification(txid) {
    return new Promise(resolve => {
    this.http.post(this.env.API_URL + 'api/get_certification_by_id', {txid: txid}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
}
