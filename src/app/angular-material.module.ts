import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdInputModule, MdGridListModule,
    MdProgressBarModule, MdSelectModule, MdSlideToggleModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule,
            MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdGridListModule, MdInputModule, MdProgressBarModule,
            MdSelectModule, MdSlideToggleModule, MdTabsModule],
  exports: [MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdGridListModule, MdInputModule, MdProgressBarModule,
            MdSelectModule, MdSlideToggleModule, MdTabsModule]
})

export class AngularMaterialModule { }
