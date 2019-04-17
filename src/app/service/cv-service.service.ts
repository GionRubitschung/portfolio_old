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

  skillFilter: string;

  constructor(public afs: AngularFirestore) {

    this.cvSkillCollection = this.afs.collection('cv-skill');

    this.cvSkill = this.cvSkillCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as IntCvSkill;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getSkills() {
    return this.cvSkill;
  }

  skillFiltern(filterWert: string) {
    this.skillFilter = filterWert;
    return this.skillFilter;
  }

  addSkill(cvSkill: IntCvSkill) {
    this.cvSkillCollection.add(cvSkill);
  }

}
