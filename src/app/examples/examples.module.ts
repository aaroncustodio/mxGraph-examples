import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BasicStylingComponent } from './basic-styling/basic-styling.component';
import { DropTargetsComponent } from './drop-targets/drop-targets.component';
import { CustomLabelsComponent } from './custom-labels/custom-labels.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ExamplesComponent,
    HelloWorldComponent,
    BasicStylingComponent,
    DropTargetsComponent,
    CustomLabelsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ExamplesModule { }
