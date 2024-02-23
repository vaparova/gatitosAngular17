import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gato } from '../models/gato';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  ruta = 'https://api.thecatapi.com/v1/images/search?limit=10';

  gatos: Gato[] = [];

  constructor(private httpClient: HttpClient) { }


  getGatoApi(){
    return new Promise( (resolve, reject) =>{
      this.httpClient.get(this.ruta).subscribe((data) => {
        Array(data).forEach((gato: any) => {
          console.log(gato);
          if(gato){
            gato.forEach((cat:any) => {
              let g = new Gato(cat.id, cat.url, cat.width, cat.height);
              resolve (this.gatos.push(g));
            });
          }else{
            reject(new Error('Error en API!!'));
          }
        });
      });
    });
  }

  getGato(): Gato[]{
    return this.gatos;
  }
}
