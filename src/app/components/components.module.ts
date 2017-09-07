import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from '../services/services.module';

import { RandomKeysGeneratorComponent } from './random-keys-generator/random-keys-generator.component';
import { RoutineDisplayerComponent } from './routine-displayer/routine-displayer.component';
import { TaskComponent } from './task/task.component';
import { RoutineItemComponent } from './routine-item/routine-item.component';
import { RoutineItemCreatorComponent } from './routine-item-creator/routine-item-creator.component';
import { RoutineManagerComponent } from './routine-manager/routine-manager.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ServicesModule ],
  declarations: [ RandomKeysGeneratorComponent, RoutineDisplayerComponent, TaskComponent,
                      RoutineItemComponent, RoutineItemCreatorComponent, RoutineManagerComponent ],
  exports: [ RandomKeysGeneratorComponent, RoutineDisplayerComponent, TaskComponent,
                      RoutineItemComponent, RoutineItemCreatorComponent, RoutineManagerComponent ]
})
export class ComponentModule { }
