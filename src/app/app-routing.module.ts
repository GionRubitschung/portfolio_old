import { SkillsAddComponent } from './skills-add/skills-add.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { UnterlagenComponent } from './unterlagen/unterlagen.component';
import { SkillsComponent } from './skills/skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/guard/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'skills', component: SkillsComponent},
  {path: 'bewerbungsunterlagen', component: UnterlagenComponent},
  {path: 'ueber-mich', component: InfosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdministratorComponent, canActivate: [AuthGuard]},
  {path: 'admin/skills-add', component: SkillsAddComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
