import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/guard/auth.guard';
import { MaterialModule } from './material';
import { CvServiceService } from './service/cv-service.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { UnterlagenComponent } from './unterlagen/unterlagen.component';
import { NgPipesModule } from 'ngx-pipes';
import { InfosComponent } from './infos/infos.component';
import { LebenslaufComponent } from './infos/lebenslauf/lebenslauf.component';
import { UeberMichComponent } from './infos/ueber-mich/ueber-mich.component';
import { LoginComponent } from './login/login.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { SkillsAddComponent } from './skills-add/skills-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    MenubarComponent,
    FilterPipe,
    HomeComponent,
    UnterlagenComponent,
    InfosComponent,
    LebenslaufComponent,
    UeberMichComponent,
    LoginComponent,
    AdministratorComponent,
    SkillsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    BrowserAnimationsModule,
    MaterialModule,
    NgPipesModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    CvServiceService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
