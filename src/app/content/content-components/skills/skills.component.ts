import { SkillGruppe } from './../../../backend/service/interfaces/skillGruppe';
import { IntCvSkill } from './../../../backend/models/cvSkill';
import { Component, OnInit } from '@angular/core';
import { CvServiceService } from 'src/app/backend/service/skills/cv-service.service';

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
    this.getSkills();
  }

  filtereSkills(skillWert: string) {
    this.filterWert = skillWert;
    this.getSkills();
  }

  getSkills() {
    this.skillService.getSkills().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    });

    this.skillService.getSkillGruppen().subscribe(skillGruppe => {
      this.skillGruppen = skillGruppe;
    });
  }

}
