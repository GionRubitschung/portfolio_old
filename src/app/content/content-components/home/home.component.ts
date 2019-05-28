import { Component, OnInit } from '@angular/core';
import { LebenslaufService } from '../../../backend/service/lebenslauf/lebenslauf.service';
import { PersonalData } from '../../../backend/service/interfaces/personal-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  DATA: PersonalData[] = [];

  constructor(public dataService: LebenslaufService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.DATA = data;
    });
  }

}
