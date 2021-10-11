import { FormStepsComponent } from './form-steps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    FormStepsComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class FormStepsModule { }
