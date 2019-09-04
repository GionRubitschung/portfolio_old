import { Component, OnInit } from '@angular/core';
import { LebenslaufService } from '../../../../backend/service/lebenslauf/lebenslauf.service';
import { PersonalData } from '../../../../backend/service/interfaces/personal-data';
import { Projekt } from '../../../../backend/service/interfaces/projekt';

@Component({
  selector: 'app-lebenslauf',
  templateUrl: './lebenslauf.component.html',
  styleUrls: ['./lebenslauf.component.css']
})
export class LebenslaufComponent implements OnInit {

  DATA: PersonalData[] = [];

  PROJEKTE: Projekt[] = [];

  SCHOOLS: any = [];

  constructor(public dataService: LebenslaufService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.DATA = data;
    });

    this.dataService.getProjekte().subscribe(projekt => {
      this.PROJEKTE = projekt;
    });

    this.dataService.getSchools().subscribe(school => {
      this.SCHOOLS = school;
    });
  }

}
