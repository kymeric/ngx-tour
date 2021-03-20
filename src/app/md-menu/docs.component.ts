import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent {
    codeInstall = `npm install @ngx-tour/core @ngx-tour/md-menu @angular/animations @angular/cdk @angular/http @angular/material`;
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
  preventScrolling: true,
});`;
    codeEventObservables = `this.tourService.initialize$.subscribe((steps: IStepOption[]) => {{ '{' }}
  console.log('tour configured with these steps:', steps);
});`;
    codeTemplate = `<tour-step-template>
  <ng-template let-step="step">
    <mat-card (click)="$event.stopPropagation()">
      <mat-card-title>
        {{ '{{' }}step?.title}}
      </mat-card-title>
      <mat-card-content>
        {{ '{{' }}step?.content}}
      </mat-card-content>
      <mat-card-actions>
        <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">
          <mat-icon>chevron_right</mat-icon>
        </button>
        <button mat-button (click)="tourService.end()">{{ '{{' }}step?.endBtnTitle}}</button>
      </mat-card-actions>
    </mat-card>
  </ng-template>
</tour-step-template>`;
}
