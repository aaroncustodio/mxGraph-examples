import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BasicStylingComponent } from './basic-styling/basic-styling.component';
import { DropTargetsComponent } from './drop-targets/drop-targets.component';
import { CustomLabelsComponent } from './custom-labels/custom-labels.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HtmlLabelsComponent } from './html-labels/html-labels.component';
import { Test1Component } from '../exercise/test1/test1.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    HelloWorldComponent,
    BasicStylingComponent,
    DropTargetsComponent,
    CustomLabelsComponent,
    HtmlLabelsComponent,
    Test1Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ExamplesModule { }
