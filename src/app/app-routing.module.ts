import { AdministratorComponent } from './admin-bereich/administrator/administrator.component';
import { HomeComponent } from './content/content-components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './content/content-components/skills/skills.component';
import { UnterlagenComponent } from './content/content-components/unterlagen/unterlagen.component';
import { LoginComponent } from './authentification/login/login.component';
import { AuthGuard } from './authentification/guard/auth.guard';
import { SkillsAddComponent } from './admin-bereich/skills-add/skills-add.component';
import { UploaderComponent } from './admin-bereich/uploader/uploader.component';
import { LebenslaufComponent } from './content/content-components/infos/lebenslauf/lebenslauf.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'skills', component: SkillsComponent},
  {path: 'bewerbungsunterlagen', component: UnterlagenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv', component: LebenslaufComponent},
  {path: 'admin', component: AdministratorComponent, canActivate: [AuthGuard], children: [
    {path: 'skills-add', component: SkillsAddComponent},
    {path: 'upload-unterlagen', component: UploaderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
