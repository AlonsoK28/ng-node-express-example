import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SlideStatusUserComponent } from '../slide-status-user.component';

// material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// angular forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// pipes
import { PipesModule } from '@pipes/module/pipes.module';

@NgModule({
  declarations: [
    SlideStatusUserComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule, 
    FormsModule,
    PipesModule
  ],
  exports: [
    SlideStatusUserComponent
  ]
})
export class SlideStatusUserModule { }
