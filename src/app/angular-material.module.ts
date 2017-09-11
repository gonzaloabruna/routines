import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdInputModule, MdGridListModule,
    MdSelectModule, MdSlideToggleModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule,
            MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdGridListModule, MdInputModule, MdSelectModule,
            MdSlideToggleModule, MdTabsModule],
  exports: [MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdGridListModule, MdInputModule, MdSelectModule,
            MdSlideToggleModule, MdTabsModule]
})

export class AngularMaterialModule { }
