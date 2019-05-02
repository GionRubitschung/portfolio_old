import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
