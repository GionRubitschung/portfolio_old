import { SkillGruppe } from './../service/interfaces/skillGruppe';
import { IntCvSkill } from './../models/cvSkill';
import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {

  SKILLS: IntCvSkill[] = [];

  skillGruppen: SkillGruppe[] = [];

  filterWert = 'Entwicklung';

  constructor(private skillService: CvServiceService) {
  }

  ngOnInit() {
    this.skillService.getSkills().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    });

    this.skillService.getSkillGruppen().subscribe(skillGruppe => {
      this.skillGruppen = skillGruppe;
    });
  }

  filtereSkills(skillWert: string) {
    this.filterWert = skillWert;
  }

}
