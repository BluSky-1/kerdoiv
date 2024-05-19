import { Injectable } from '@angular/core';
import { Query } from '../models/Query';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
collectionName = 'Queries'
  constructor(private afs: AngularFirestore) { }

  create(query:Query){
    return this.afs.collection<Query>(this.collectionName).doc(query.id).set(query);
  }

  getAll(): Observable<Array<Query>>{
    return this.afs.collection<Query>(this.collectionName).valueChanges();
  }

  getById(id:string){

  }

  update(){

  }

  delete(){

  }

  answer(id:number){

  }

  getTop(){

  }
}
