import { Component, OnInit, Injectable } from '@angular/core';
import { LebenslaufService } from '../../../backend/service/lebenslauf/lebenslauf.service';
import { PersonalData } from '../../../backend/service/interfaces/personal-data';
import { AboutMe } from '../../../backend/service/interfaces/about-me';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { BottomYeetComponent } from './bottom-yeet/bottom-yeet.component';
import { AuthService } from 'src/app/authentification/auth.service';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class HomeComponent implements OnInit {

  DATA: PersonalData[] = [];
  ICH: AboutMe[] = [];
  projekt: '';
  loggedIn: boolean = false;

  // tslint:disable-next-line:variable-name
  constructor(public dataService: LebenslaufService, private bottomSheet: MatBottomSheet, private YeetComp: BottomYeetComponent, private authService: AuthService, private router: Router) { }

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

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      return false;
    }
    return true;
  }

}

