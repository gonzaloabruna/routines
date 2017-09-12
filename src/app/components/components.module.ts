import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material.module';
import { ServicesModule } from '../services/services.module';

import { RandomKeysGeneratorComponent } from './random-keys-generator/random-keys-generator.component';
import { RoutineDisplayerComponent } from './routine-displayer/routine-displayer.component';
import { TaskComponent } from './task/task.component';
import { RoutineItemCreatorComponent } from './routine-item-creator/routine-item-creator.component';
import { RoutineManagerComponent } from './routine-manager/routine-manager.component';
import { TagComponent } from './tag/tag.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';

@NgModule({
  imports: [ CommonModule, FormsModule, AngularMaterialModule, ServicesModule ],
  declarations: [ ProgressChartComponent, RandomKeysGeneratorComponent, RoutineDisplayerComponent, TaskComponent,
                      RoutineItemCreatorComponent, RoutineManagerComponent, TagComponent ],
  exports: [ ProgressChartComponent, RandomKeysGeneratorComponent, RoutineDisplayerComponent, TaskComponent,
                      RoutineItemCreatorComponent, RoutineManagerComponent, TagComponent ]
})
export class ComponentModule { }
