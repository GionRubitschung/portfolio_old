import { MaterialModule } from './material';
import { CvServiceService } from './service/cv-service.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { UnterlagenComponent } from './unterlagen/unterlagen.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    MenubarComponent,
    FilterPipe,
    HomeComponent,
    UnterlagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    BrowserAnimationsModule,
    MaterialModule,
    NgPipesModule
  ],
  providers: [CvServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
