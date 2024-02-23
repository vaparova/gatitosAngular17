import { Injectable, inject } from '@angular/core';
import { Database, child, get, getDatabase, onValue, ref, set } from '@angular/fire/database';
import { Subject } from 'rxjs';
import { Gato } from '../models/gato';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private database = inject(Database);
  db = ref(getDatabase());
  data: Gato[] = [];
  private data$ = new Subject<Gato[]>();
  

  constructor() { 
    this.getDataRt();
  }

  observerData(){
    return this.data$.asObservable();
  }

  getData(){
    return get(child(this.db,'gatito/')).then((snapshot) => {
      if (snapshot.exists()) {
        this.data = snapshot.val();
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch( (err)=>{console.error(err)});
  }

  getDataRt(){
    const db = getDatabase();
    const query = ref(db,'gatito/');

    onValue(query, (snapshot)=>{
        this.data = snapshot.val();
        this.data$.next(this.data);
        console.log(this.data);
    });
  }

  setGatoBD(gatos: Gato[]){

    const db = getDatabase();
    return set(ref(db, 'gatito/'), gatos)
      .then(() => {
        // Data saved successfully!
        console.log('ok!');
        this.getDataRt();
      })
      .catch((error) => {
        console.error('error!');
        // The write failed...
    });

  }

  pushGato(gato: Gato){
    this.data.push(gato);
    this.setGatoBD(this.data);
  }

  
}
