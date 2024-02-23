import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Gato } from '../../models/gato';

@Component({
  selector: 'app-gatos-bd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gatos-bd.component.html',
  styleUrl: './gatos-bd.component.css'
})
export class GatosBDComponent {

  private fbService = inject(FirebaseService);
  gatos: Gato[] = [];
  data$: Observable<Gato[]>| undefined;

  constructor(){
    this.fbService.getData().then( (resp)=>{
      console.log(resp);
      this.gatos = resp;
     });
  }

  ngOnInit(): void {
    this.data$ = this.fbService.observerData();
    this.data$.subscribe( data => this.gatos = data);
    
  }

  borrarGato(i: string){
    console.log("Esto debe borrar un gato de la BD!");
  }
}
