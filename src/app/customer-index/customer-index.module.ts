import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerIndexRoutingModule } from './customer-index-routing.module';
import { SubCategoryComponent } from './sub-category/sub-category.component';


@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule,
    CustomerIndexRoutingModule
  ],
  exports:[CustomerIndexRoutingModule]
})
export class CustomerIndexModule { }
