import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './providers/firebase.service';
import { Observable } from 'rxjs';
import { GatosBDComponent } from './components/gatos-bd/gatos-bd.component';
import { GatosApiComponent } from './components/gatos-api/gatos-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GatosBDComponent, GatosApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fbAngular17';
  

  
 
  constructor(){
   

  }

  
}
