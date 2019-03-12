import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule, 
            MatDialogModule,
            MatFormFieldModule,    
        ],


  exports: [MatButtonModule,
            MatCheckboxModule,
            MatDialogModule,
            MatFormFieldModule, 
        ],
})
export class MaterialModule { }