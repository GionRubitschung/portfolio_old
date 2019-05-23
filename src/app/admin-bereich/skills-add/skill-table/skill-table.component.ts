import { CvServiceService } from './../../../backend/service/skills/cv-service.service';
import { IntCvSkill } from './../../../backend/models/cvSkill';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SkillTableDataSource } from './skill-table-datasource';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css']
})
export class SkillTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SkillTableDataSource;
  SKILLS: IntCvSkill[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'skillBeschreibung'];

  constructor(private skillService: CvServiceService) {}

  ngOnInit() {
    this.dataSource = new SkillTableDataSource(this.paginator, this.sort);
    this.skillService.getSkills().subscribe(cvSkill => {
      this.SKILLS = cvSkill;
    })
  }
}
