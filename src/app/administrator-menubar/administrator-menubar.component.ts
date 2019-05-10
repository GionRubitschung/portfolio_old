import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator-menubar',
  templateUrl: './administrator-menubar.component.html',
  styleUrls: ['./administrator-menubar.component.css']
})
export class AdministratorMenubarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
