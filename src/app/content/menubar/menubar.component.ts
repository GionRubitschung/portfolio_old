import { NavigationInterface } from './../../backend/service/interfaces/navigation-interface';
import { Component, OnInit } from '@angular/core';
import { NavigationServiceService } from 'src/app/backend/service/menubar/navigation-service.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  LINKS: NavigationInterface[] = [];

  constructor(private linkService: NavigationServiceService) { }

  ngOnInit() {
    this.linkService.getLinks().subscribe(link => {
      this.LINKS = link;
    });
  }

  routerLink() {
    this.linkService.getLinks().subscribe(link => {
      this.LINKS = link;
    });
  }

}
