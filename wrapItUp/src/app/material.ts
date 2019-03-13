import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule, 
            MatFormFieldModule, 
            MatSidenavModule,
            MatCardModule,
            MatToolbarModule,
            MatIconModule ,
            MatSlideToggleModule,
            MatBottomSheetModule
        ],


  exports: [MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule, 
            MatSidenavModule,
            MatCardModule,
            MatToolbarModule,
            MatIconModule,
            MatSlideToggleModule,
            MatBottomSheetModule
        ],
})
export class MaterialModule { }