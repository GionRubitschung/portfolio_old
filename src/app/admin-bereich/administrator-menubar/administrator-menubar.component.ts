import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentification/auth.service';

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
