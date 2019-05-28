import { Component, OnInit } from '@angular/core';
import { LebenslaufService } from '../../../../backend/service/lebenslauf/lebenslauf.service';
import { PersonalData } from '../../../../backend/service/interfaces/personal-data';

@Component({
  selector: 'app-lebenslauf',
  templateUrl: './lebenslauf.component.html',
  styleUrls: ['./lebenslauf.component.css']
})
export class LebenslaufComponent implements OnInit {

  DATA: PersonalData[] = [];

  constructor(public dataService: LebenslaufService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.DATA = data;
    });
  }

}
