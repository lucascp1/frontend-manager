import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    HeaderComponent,
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
