import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PersonalData } from '../interfaces/personal-data';

@Injectable({
  providedIn: 'root'
})

export class LebenslaufService {

  dataCollection: AngularFirestoreCollection<PersonalData>;
  data: Observable<PersonalData[]>;

  constructor(public afs: AngularFirestore) { }

  fetchingData(){
    this.dataCollection = this.afs.collection('personal_data');

    this.data = this.dataCollection.valueChanges();
  }

  getData(){
    this.fetchingData();
    return this.data;
  }
}
