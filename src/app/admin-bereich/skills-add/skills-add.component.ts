import { IntCvSkill } from './../../backend/models/cvSkill';
import { CvServiceService } from './../../backend/service/skills/cv-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {


  SKILLS: IntCvSkill[] = [];

  skillLength: IntCvSkill[] = [];

  skill: IntCvSkill = {
    skillBeschreibung: '',
    skillname: '',
    skillGruppe: '',
    skillwert: null,
  };

  skillFilter = 5;

  constructor(private skillService: CvServiceService) { }

  ngOnInit() {
      this.skillService.getAdminSKills(this.skillFilter).subscribe(cvSkill => {
        this.SKILLS = cvSkill;
      });

      this.skillService.getSkills().subscribe(cvSkill => {
        this.skillLength = cvSkill;
      });
  }

  filtereSkills() {
    this.skillService.getAdminSKills(this.skillFilter).subscribe(cvSkill => {
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

  deleteSkill(event, skill){
    this.skillService.deleteSkill(skill);
  }

}
