import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule, 
            MatDialogModule,
            MatFormFieldModule, 
            MatSidenavModule,
            MatCardModule 
        ],


  exports: [MatButtonModule,
            MatCheckboxModule,
            MatDialogModule,
            MatFormFieldModule, 
            MatSidenavModule,
            MatCardModule
        ],
})
export class MaterialModule { }