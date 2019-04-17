import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(werte: any, kriterium: any, gruppe: any ): any {
  //   if (kriterium === undefined) {
  //     return werte;
  //   }
  //   return werte.filter(skill => {
  //     return skill.gruppe.toLowerCase().includes(kriterium.toLowerCase());
  //   });
  // }

  transform(werte: any[], kriterium: string, gruppe): any[] {
    if (!werte) {
      return [];
    }
    if (!gruppe || gruppe.length === 0) {
      return werte;
    }
    return werte.filter(it =>
    it[kriterium] === gruppe);
  }

}
