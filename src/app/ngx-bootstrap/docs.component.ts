import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent {
    codeInstall = `npm install @ngx-tour/core @ngx-tour/ngx-bootstrap ngx-bootstrap`;
    codeStyle = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">`;
    codeTourAnchor = `<div tourAnchor="some.anchor.id">...</div>`;
    codeInitialize = `this.tourService.initialize([{{ '{' }}
  anchorId: 'some.anchor.id',
  content: 'Some content',
  title: 'First',
}, {{ '{' }}
  anchorId: 'another.anchor.id',
  content: 'Other content',
  title: 'Second',
}]);`;
    codeInitializeDefaults = `this.tourService.initialize(steps, {{ '{' }}
  route: '',
  placement: 'left',
  preventScrolling: true,
});`;
    codeEventObservables = `this.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}
  console.log('tour configured with these steps:', steps);
});`;
    codeTemplate = `<tour-step-template>
  <ng-template let-step="step">
    <p class="tour-step-content">{{ '{{' }}step?.content}}</p>
    <div class="tour-step-navigation">
      <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">{{ '{{' }}step?.prevBtnTitle}}</button>&nbsp;
      <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">{{ '{{' }}step?.nextBtnTitle}}</button>&nbsp;
      <button class="btn btn-sm btn-default" (click)="tourService.end()">{{ '{{' }}step?.endBtnTitle}}</button>
    </div>
  </ng-template>
</tour-step-template>`;
}
