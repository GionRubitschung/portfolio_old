import { NavigationInterface } from './interfaces/navigation-interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  linkCollection: AngularFirestoreCollection<NavigationInterface>;
  link: Observable<NavigationInterface[]>;

constructor(public afs: AngularFirestore) {

  this.linkCollection = this.afs.collection('links');

  this.link = this.linkCollection.valueChanges();

}

getLinks() {
  return this.link;
}

}
