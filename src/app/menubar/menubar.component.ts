import { NavigationServiceService } from './../service/navigation-service.service';
import { Component, OnInit } from '@angular/core';
import { NavigationInterface } from '../service/interfaces/navigation-interface';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  LINKS: NavigationInterface[];

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
