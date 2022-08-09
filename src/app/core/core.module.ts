import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridFilterPipe } from './gridFilter.pipe';



@NgModule({
  declarations: [
      GridFilterPipe
   ],
  imports: [
    CommonModule
  ],
  exports:[GridFilterPipe]
})
export class CoreModule { }
