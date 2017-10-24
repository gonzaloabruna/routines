import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatGridListModule,
    MatProgressBarModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule,
            MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatProgressBarModule,
            MatSelectModule, MatSlideToggleModule, MatTabsModule],
  exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatProgressBarModule,
            MatSelectModule, MatSlideToggleModule, MatTabsModule]
})

export class AngularMaterialModule { }
