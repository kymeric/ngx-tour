import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxPopperComponent } from './ngx-popper.component';
import { DocsComponent } from './docs.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgxPopperComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: NgxPopperComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
  ],
})
export class NgxPopperModule { }
