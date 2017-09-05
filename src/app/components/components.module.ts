import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RandomKeysGeneratorComponent } from './random-keys-generator/random-keys-generator.component';
import { RoutineDisplayerComponent } from './routine-displayer/routine-displayer.component';
import { RoutineItemComponent } from './routine-item/routine-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ RandomKeysGeneratorComponent, RoutineDisplayerComponent, RoutineItemComponent ],
  exports: [ RandomKeysGeneratorComponent, RoutineDisplayerComponent, RoutineItemComponent ]
})
export class ComponentModule { }
