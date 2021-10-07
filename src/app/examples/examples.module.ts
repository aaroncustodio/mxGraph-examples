import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BasicStylingComponent } from './basic-styling/basic-styling.component';
import { DropTargetsComponent } from './exercise/drop-targets.component';



@NgModule({
  declarations: [
    ExamplesComponent,
    HelloWorldComponent,
    BasicStylingComponent,
    DropTargetsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExamplesModule { }
