import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CamaraRoutingModule } from './camara-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CamaraComponent } from './camara/camara.component';




@NgModule({
  declarations: [CamaraComponent],
  imports: [
    CamaraRoutingModule,
    NativeScriptCommonModule,
  
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CamaraModule {
  constructor() { }
 }
