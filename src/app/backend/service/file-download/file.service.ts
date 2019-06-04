import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { File } from '../interfaces/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileCollection: AngularFirestoreCollection<File>;
  file: Observable<File[]>;
  projektName = '';

  constructor(private afs: AngularFirestore) { }

  fetchingData(){
    this.fileCollection = this.afs.collection('files', ref => ref.where('Projektname', '==', this.projektName));

    this.file = this.fileCollection.valueChanges();
  }

  getFiles() {
    this.fetchingData();
    return this.file;
  }

  filtereFiles(file: string) {
    this.projektName = file;
  }
}
