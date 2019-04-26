import { SkillGruppe } from './../service/interfaces/skillGruppe';
import { IntCvSkill } from './../models/cvSkill';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit, OnDestroy {

  SKILLS: IntCvSkill[] = [];

  skillGruppen: SkillGruppe[] = [];

  skill: IntCvSkill = {
    skillBeschreibung: '',
    skillname: '',
    skillGruppe: '',
    skillwert: null,
  };

  filterWert = 'Entwicklung';

  constructor(private skillService: CvServiceService) {
  }

  ngOnInit() {
    this.skillService.getSkills().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    });

    this.skillService.getSkillGruppen().subscribe(skillGruppe => {
      this.skillGruppen = skillGruppe;
    })
  }

  ngOnDestroy() {
  }

  filtereSkills(skillWert: string) {
    this.filterWert = skillWert;
  }

  addSkill() {
    this.skillService.addSkill(this.skill);
    this.skill.skillBeschreibung = '';
    this.skill.skillGruppe = '';
    this.skill.skillname = '';
    this.skill.skillwert = null;
  }

}
