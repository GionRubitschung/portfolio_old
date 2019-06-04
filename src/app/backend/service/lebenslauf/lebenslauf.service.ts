import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PersonalData } from '../interfaces/personal-data';
import { Projekt } from '../interfaces/projekt';
import { AboutMe } from '../interfaces/about-me';

@Injectable({
  providedIn: 'root'
})

export class LebenslaufService {

  dataCollection: AngularFirestoreCollection<PersonalData>;
  data: Observable<PersonalData[]>;

  projektCollection: AngularFirestoreCollection<Projekt>;
  projekt: Observable<Projekt[]>;

  ichCollection: AngularFirestoreCollection<AboutMe>;
  ich: Observable<AboutMe[]>;

  constructor(public afs: AngularFirestore) { }

  fetchingData() {
    this.dataCollection = this.afs.collection('personal_data');
    this.projektCollection = this.afs.collection('projekte', ref => ref.orderBy('Startdatum', 'asc'));
    this.ichCollection = this.afs.collection('ueber-mich');

    this.data = this.dataCollection.valueChanges();
    this.projekt = this.projektCollection.valueChanges();
    this.ich = this.ichCollection.valueChanges();
  }

  getData() {
    this.fetchingData();
    return this.data;
  }

  getProjekte() {
    this.fetchingData();
    return this.projekt;
  }

  getIch() {
    this.fetchingData();
    return this.ich;
  }
}
