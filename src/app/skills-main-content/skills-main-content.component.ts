import { IntCvSkill } from './../models/cvSkill';
import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';

@Component({
  selector: 'app-skills-main-content',
  templateUrl: './skills-main-content.component.html',
  styleUrls: ['./skills-main-content.component.css']
})
export class SkillsMainContentComponent implements OnInit {

  SKILLS: IntCvSkill[];

  constructor(private skillService: CvServiceService) { }

  ngOnInit() {
    this.skillService.getItems().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    });
  }

}
