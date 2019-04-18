import { IntCvSkill } from './../models/cvSkill';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';
// import { UniquePipe } from 'ngx-pipes/src/pipes/array/unique';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit, OnDestroy {

  SKILLS: IntCvSkill[];

  skill: IntCvSkill = {
    skillBeschreibung: '',
    skillname: '',
    skillGruppe: '',
    skillwert: null,
  };

  filterWert = 'Entwicklung';

  constructor(private skillService: CvServiceService, /*private uniquePipe: UniquePipe*/) {
    // this.uniquePipe.transform(this.SKILLS);
  }

  ngOnInit() {
    this.skillService.getSkills().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    });
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
