import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ApiService } from './api.service';

@NgModule({
    providers: [ ApiService ]
})
export class ServicesModule {}
