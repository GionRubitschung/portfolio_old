import { UnterlagenComponent } from './unterlagen/unterlagen.component';
import { SkillsComponent } from './skills/skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'skills', component: SkillsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bewerbungsunterlagen', component: UnterlagenComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
