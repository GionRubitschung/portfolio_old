import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PersonalData } from '../interfaces/personal-data';
import { Projekt } from '../interfaces/projekt';
import { AboutMe } from '../interfaces/about-me';
import { School } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})

export class LebenslaufService {

  dataCollection: AngularFirestoreCollection<PersonalData>;
  data: Observable<PersonalData[]>;

  projektCollection: AngularFirestoreCollection<Projekt>;
  projekt: Observable<Projekt[]>;

  schoolCollection: AngularFirestoreCollection<School>;
  school: Observable<School[]>;

  ichCollection: AngularFirestoreCollection<AboutMe>;
  ich: Observable<AboutMe[]>;

  constructor(public afs: AngularFirestore) { }

  fetchingData() {
    this.dataCollection = this.afs.collection('personal_data');
    this.projektCollection = this.afs.collection('projekte', ref => ref.orderBy('Startdatum', 'desc'));
    this.ichCollection = this.afs.collection('ueber-mich');
    this.schoolCollection = this.afs.collection('schools');

    this.data = this.dataCollection.valueChanges();
    this.projekt = this.projektCollection.valueChanges();
    this.ich = this.ichCollection.valueChanges();
    this.school = this.schoolCollection.valueChanges();
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

  getSchools() {
    this.fetchingData();
    return this.school;
  }
}
