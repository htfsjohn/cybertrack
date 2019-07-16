import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CybertrackSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CybertrackSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CybertrackSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CybertrackSharedModule {
  static forRoot() {
    return {
      ngModule: CybertrackSharedModule
    };
  }
}
