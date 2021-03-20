import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgBootstrapModule } from '@ngx-tour/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';

import { DocsComponent } from './docs.component';
import { NgBootstrapComponent } from './ng-bootstrap.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgBootstrapComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    HighlightModule,
    TourNgBootstrapModule.forRoot(),
    RouterModule.forChild([{
      component: NgBootstrapComponent,
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
export class NgBootstrapModule { }
