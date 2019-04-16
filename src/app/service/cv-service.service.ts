import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IntCvSkill } from '../models/cvSkill';

@Injectable({
  providedIn: 'root'
})

export class CvServiceService {
  cvSkillCollection: AngularFirestoreCollection<IntCvSkill>;
  cvSkill: Observable<IntCvSkill[]>;

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

  getItems() {
    return this.cvSkill;
  }

  addItem(skill: IntCvSkill) {
    this.cvSkillCollection.add(skill);
  }
}
