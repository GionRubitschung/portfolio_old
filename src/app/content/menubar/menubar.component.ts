import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  hamburger: any;

  constructor() { }

  ngOnInit() {
  }

  collpseBurger() {
    this.hamburger = document.querySelector('.hamburger');
    this.hamburger.addEventListener('click', function() {
      this.hamburger.classList.toggle('is-active');
    });
  }

}
