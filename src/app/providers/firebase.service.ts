import { Injectable, inject } from '@angular/core';
import { Database, child, get, getDatabase, onValue, ref } from '@angular/fire/database';
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

  observerData(){
    return this.data$.asObservable();
  }

  
}
