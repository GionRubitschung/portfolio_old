import { Component, OnInit } from '@angular/core';
import { LebenslaufService } from '../../../backend/service/lebenslauf/lebenslauf.service';
import { PersonalData } from '../../../backend/service/interfaces/personal-data';
import { AboutMe } from '../../../backend/service/interfaces/about-me';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomYeetComponent } from './bottom-yeet/bottom-yeet.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DATA: PersonalData[] = [];
  ICH: AboutMe[] = [];
  projekt: '';

  // tslint:disable-next-line:variable-name
  constructor(public dataService: LebenslaufService, private bottomSheet: MatBottomSheet, private YeetComp: BottomYeetComponent) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.DATA = data;
    });
    this.dataService.getIch().subscribe(ich => {
      this.ICH = ich;
    });
  }

  openBottomYeet() {
    this.YeetComp.filtereFileees(this.projekt);
    this.bottomSheet.open(BottomYeetComponent);
  }

}
