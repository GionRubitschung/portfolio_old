import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(skills: any, skillgruppe: any): any {
    if (skillgruppe === undefined) {
      return skills;
    }
    return skills.filter(skill => {
      return skill.skillGruppe.toLowerCase().includes(skillgruppe.toLowerCase());
    });
  }

}
