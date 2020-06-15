import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreRoutingModule } from './membre-routing.module';
import { CompteComponent } from './compte/compte.component';


@NgModule({
  declarations: [CompteComponent],
  imports: [
    CommonModule,
    MembreRoutingModule
  ]
})
export class MembreModule { }
