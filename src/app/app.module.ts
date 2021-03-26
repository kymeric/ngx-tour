import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  bootstrap: [DemoComponent],
  declarations: [DemoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    OverlayModule,
    HighlightModule,
    RouterModule.forRoot([{
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      path: '',
    }, {
      loadChildren: () => import('./md-menu/mat-lazy-tour/app.module').then(m => m.AppModule),
      path: 'mat-lazy-tour',
    }, {
      loadChildren: () => import('./ng-bootstrap/ng-bootstrap.module').then(m => m.NgBootstrapModule),
      path: 'ng-bootstrap',
    }, {
      loadChildren: () => import('./ngx-bootstrap/ngx-bootstrap.module').then(m => m.NgxBootstrapModule),
      path: 'ngx-bootstrap',
    }, {
      loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule),
      path: 'console',
    }, {
      loadChildren: () => import('./md-menu/md-menu.module').then(m => m.MdMenuModule),
      path: 'md-menu',
    }, {
      loadChildren: () => import('./ngx-popper/ngx-popper.module').then(m => m.NgxPopperModule),
      path: 'ngx-popper',
    }, {
      redirectTo: '',
      path: '**',
    }], {
      useHash: true,
    }),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          bash: () => import('highlight.js/lib/languages/bash'),
          xml: () => import('highlight.js/lib/languages/xml'),
        }
      }
    }
  ],
})
export class DemoModule { }
