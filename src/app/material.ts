import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatProgressBarModule,  } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatChipsModule
  ]
})

export class MaterialModule { }
