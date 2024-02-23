import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HttpClientService } from '../../providers/http-client.service';
import { Gato } from '../../models/gato';
import { FirebaseService } from '../../providers/firebase.service';

@Component({
  selector: 'app-gatos-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gatos-api.component.html',
  styleUrl: './gatos-api.component.css'
})
export class GatosApiComponent {

  private apiService = inject(HttpClientService);
  private fbService = inject(FirebaseService);
  arrGatos: Gato[] = [];

  constructor(){
    this.obtenerGatoApi().then( ()=>{
      this.mostrarGatos(0,3); // de esta forma evitamos el setTimeOut()
    }).catch( ()=>{
      // codigo de manejo error api
    });
  }

  obtenerGatoApi(): Promise<boolean>{
    return this.apiService.getGatoApi().then( ()=>{
      this.arrGatos = this.apiService.getGato();
      return true;
    }).catch( ()=> {
      return false;
    });

  }
 
  mostrarGatos(i: number, max: number){
    this.arrGatos.forEach( (gato, index: number)=>{
      if( index >= i && index <= max ){
        gato.visible = true;
      }else{
        gato.visible = false;
      }
    });
  }

  guardarGato(id: string){
    this.arrGatos.forEach(gato =>{
      if(gato.id == id){
        this.fbService.pushGato(gato);
      }
    });
   // this.setGatoDB();   
  
    }
}
