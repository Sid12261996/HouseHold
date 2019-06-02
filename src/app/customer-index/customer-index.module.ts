import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerIndexRoutingModule } from './customer-index-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerIndexRoutingModule
  ],
  exports:[CustomerIndexRoutingModule]
})
export class CustomerIndexModule { }
