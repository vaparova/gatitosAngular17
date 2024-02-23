import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import {  provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {  getDatabase, provideDatabase} from '@angular/fire/database';



import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(  
        provideFirebaseApp( ()=>
          initializeApp({
            apiKey: "AIzaSyA30srdOPrzo9hyUiGy_HnCoOrtirYZBVw",
            authDomain: "dbgatito-2eb82.firebaseapp.com",
            databaseURL: "https://dbgatito-2eb82-default-rtdb.firebaseio.com",
            projectId: "dbgatito-2eb82",
            storageBucket: "dbgatito-2eb82.appspot.com",
            messagingSenderId: "639930537537",
            appId: "1:639930537537:web:21ce6a9375c514c07d18c0",
            measurementId: "G-CJ6BLN9HHD"
          }),
        ),
      ),
    importProvidersFrom(provideDatabase( ()=> getDatabase())), 
    provideHttpClient()      
    ]
};
