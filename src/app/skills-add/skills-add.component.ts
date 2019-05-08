import { IntCvSkill } from './../models/cvSkill';
import { CvServiceService } from './../service/cv-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {

  SKILLS: IntCvSkill[] = [];

  skill: IntCvSkill = {
    skillBeschreibung: '',
    skillname: '',
    skillGruppe: '',
    skillwert: null,
  };

  constructor(private skillService: CvServiceService) { }

  ngOnInit() {
      this.skillService.getSkills().subscribe(cvSkill => {
        this.SKILLS = cvSkill;
      });
  }

  addSkill() {
    this.skillService.addSkill(this.skill);
    this.skill.skillBeschreibung = '';
    this.skill.skillGruppe = '';
    this.skill.skillname = '';
    this.skill.skillwert = null;
  }

}
