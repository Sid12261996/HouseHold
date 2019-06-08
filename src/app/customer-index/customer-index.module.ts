import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerIndexRoutingModule} from './customer-index-routing.module';
import {SubCategoryComponent} from './sub-category/sub-category.component';
import {MaterialModule} from '../models/material';
import {MatSnackBar} from '@angular/material/snack-bar';


@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule,
    CustomerIndexRoutingModule, MaterialModule
  ],
  exports: [CustomerIndexRoutingModule],
  providers: [MatSnackBar]
})
export class CustomerIndexModule {
}
