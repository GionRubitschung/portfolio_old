import { IntCvSkill } from './../models/cvSkill';
import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  SKILLS: IntCvSkill[];

  constructor(private skillService: CvServiceService) { }

  ngOnInit() {
    this.skillService.getItems().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    });
  }

}
