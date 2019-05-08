import { SkillGruppe } from './interfaces/skillGruppe';
import { IntCvSkill } from './../models/cvSkill';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CvServiceService {
  cvSkillCollection: AngularFirestoreCollection<IntCvSkill>;
  cvSkill: Observable<IntCvSkill[]>;

  skillGruppeCollection: AngularFirestoreCollection<SkillGruppe>;
  skillGruppe: Observable<SkillGruppe[]>;

  skillAdminCollection: AngularFirestoreCollection<IntCvSkill>;
  skillAdmin: Observable<IntCvSkill[]>;

  skillFilter: string;

  adminFilter: number;

  constructor(public afs: AngularFirestore) { }

  fetchingData() {
    this.cvSkillCollection = this.afs.collection('cv-skill');

    this.cvSkill = this.cvSkillCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as IntCvSkill;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.skillGruppeCollection = this.afs.collection('cv-skill');

    this.skillGruppe = this.skillGruppeCollection.valueChanges();
  }

  getSkills() {
    this.fetchingData();
    return this.cvSkill;
  }

  getSkillGruppen() {
    this.fetchingData();
    return this.skillGruppe;
  }

  skillFiltern(filterWert: string) {
    this.skillFilter = filterWert;
    // return this.skillFilter;
  }

  addSkill(cvSkill: IntCvSkill) {
    this.cvSkillCollection.add(cvSkill);
  }


  // ADMIN ################ ADMIN

  fetchingAdminData() {
    this.skillAdminCollection = this.afs.collection('cv-skill', ref => ref.limit(this.adminFilter));

    this.skillAdmin = this.skillAdminCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as IntCvSkill;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.cvSkillCollection = this.afs.collection('cv-skill');

    this.cvSkill = this.cvSkillCollection.valueChanges();
  }

  getAdminSKills() {
    this.fetchingAdminData();
    return this.skillAdmin;
  }

  filtereAdminSkills(filterwert: number) {
    this.adminFilter = filterwert;
  }


}
