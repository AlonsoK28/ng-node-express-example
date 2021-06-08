import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pipes
import { StatusUserPipe } from '../status-user.pipe';

@NgModule({
  declarations: [
    StatusUserPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusUserPipe
  ]
})
export class PipesModule { }
