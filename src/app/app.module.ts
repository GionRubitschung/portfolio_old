import { HomeComponent } from './content/content-components/home/home.component';
import { FilterPipe } from './backend/pipes/filter.pipe';
import { AuthGuard } from './authentification/guard/auth.guard';
import { AuthService } from './authentification/auth.service';
import { MaterialModule } from './material';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPipesModule } from 'ngx-pipes';
import { DropzoneDirective } from './dropzone.directive';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CvServiceService } from './backend/service/skills/cv-service.service';
import { SkillTableComponent } from './admin-bereich/skills-add/skill-table/skill-table.component';
import { UploadTaskComponent } from './admin-bereich/upload-task/upload-task.component';
import { UploaderComponent } from './admin-bereich/uploader/uploader.component';
import { DataLoaderComponent } from './content/data-loader/data-loader.component';
import { SkillsComponent } from './content/content-components/skills/skills.component';
import { MenubarComponent } from './content/menubar/menubar.component';
import { UnterlagenComponent } from './content/content-components/unterlagen/unterlagen.component';
import { LebenslaufComponent } from './content/content-components/infos/lebenslauf/lebenslauf.component';
import { LoginComponent } from './authentification/login/login.component';
import { AdministratorComponent } from './admin-bereich/administrator/administrator.component';
import { SkillsAddComponent } from './admin-bereich/skills-add/skills-add.component';
import { AdministratorMenubarComponent } from './admin-bereich/administrator-menubar/administrator-menubar.component';
import { BottomYeetComponent } from './content/content-components/home/bottom-yeet/bottom-yeet.component';



@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    MenubarComponent,
    FilterPipe,
    HomeComponent,
    UnterlagenComponent,
    LebenslaufComponent,
    LoginComponent,
    AdministratorComponent,
    SkillsAddComponent,
    AdministratorMenubarComponent,
    DataLoaderComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    SkillTableComponent,
    BottomYeetComponent,
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
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    CvServiceService,
    AuthGuard,
    AuthService,
    AngularFireStorageModule,
    BottomYeetComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BottomYeetComponent
  ]
})
export class AppModule { }
