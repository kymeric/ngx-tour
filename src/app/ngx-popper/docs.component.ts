import { Component } from '@angular/core';

import { Method } from './../util/models/method.model';
import { Property } from './../util/models/property.model';
import { Event } from './../util/models/event.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent {
    codeInstall = `npm install @ngx-tour/core @ngx-tour/ngx-popper ngx-popperjs`;
    codeTourAnchor = `<div tourAnchor="some.anchor.id">...</div>`;
    codeInitialize = `this.tourService.initialize([{
  anchorId: 'some.anchor.id',
  content: 'Some content',
  title: 'First',
}, {
  anchorId: 'another.anchor.id',
  content: 'Other content',
  title: 'Second',
}]);`;
    codeInitializeDefaults = `this.tourService.initialize(steps, {
  route: '',
  placement: 'left',
  preventScrolling: true,
});`;
    codeEventObservables = `this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
  console.log('tour configured with these steps:', steps);
});`;
    codeTemplate = `<tour-step-template>
  <popper-content class="popper-content">
    <ng-container *ngTemplateOutlet="stepTemplate || stepTemplateContent || defaultTemplate;context: { step: step }">
    </ng-container>
  </popper-content>

  <ng-template #defaultTemplate let-step="step">
    <p class="ngxp-title">{{ step?.title }}</p>
    <p class="ngxp-content">{{ step?.content }}</p>
    <div class="tour-step-navigation">
      <button [hidden]="!tourService.hasPrev(step)" class="ngxp-btn btn-prev" (click)="tourService.prev()">
        « {{ step?.prevBtnTitle }}
      </button>
      <button [hidden]="!tourService.hasNext(step)" class="ngxp-btn btn-next" (click)="tourService.next()">
        {{ step?.nextBtnTitle }} »
      </button>
      <button class="ngxp-btn btn-end" (click)="tourService.end()">
        {{ step?.endBtnTitle }}
      </button>
    </div>
  </ng-template>
</tour-step-template>`;

    tourServiceMethods = [
        new Method('start', 'start()', 'void', 'Start the tour'),
        new Method('startAt', 'startAt(stepId: number | string)', 'void', 'Start the tour at the step with stepId or at the specified index'),
        new Method('end', 'end()', 'void', 'Ends the tour'),
        new Method('pause', 'pause()', 'void', 'Pauses the tour'),
        new Method('resume', 'resume()', 'void', 'Resumes the tour'),
        new Method('next', 'next()', 'void', 'Goes to the next step'),
        new Method('prev', 'prev()', 'void', 'Goes to the previous step'),
    ];
    stepConfigProperties = [
        new Property('stepId', 'string', '""', 'A unique identifier for the step'),
        new Property('anchorId', 'string', '', 'The anchor to which the step will be attached', 'config.anchorId'),
        new Property('title', 'string', '""', 'The title of the tour step'),
        new Property('content', 'string', '""', 'The content text of the tour step'),
        new Property('route', 'string | UrlSegment[]', 'undefined', 'The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.', 'config.route'),
        new Property('nextStep', 'number | string', 'undefined', 'The step index or stepId of the next step. If undefined, the next step in the steps array is used.', 'config.nextStep'),
        new Property('prevStep', 'number | string', 'undefined', 'The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.'),
        new Property('placement', 'NgxPopperjsPlacements | \'top\' | \'bottom\' | \'left\' | \'right\' | \'top-start\' | \'bottom-start\' | \'left-start\' | \'right-start\' | \'top-end\' | \'bottom-end\' | \'left-ent\' | \'right-end\' | \'auto\' | \'auto-start\' | \'auto-end\'', 'auto', 'Where the tour step should placed with respect to the anchor. Supports all <a href="https://valor-software.com/ngx-bootstrap/index-bs4.html#/popover#popover-directive">ngx-bootstrap docs</a>.', 'config.placement.default'),
        new Property('preventScrolling', 'boolean', 'false', 'Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to <code>true</code> will disable the scroll behavior.'),
        new Property('prevBtnTitle', 'string', 'Prev', 'Sets a custom prev button title for a given step.', 'config.buttons.custom'),
        new Property('nextBtnTitle', 'string', 'Next', 'Sets a custom next button title for a given step.'),
        new Property('endBtnTitle', 'string', 'End', 'Sets a custom end button title for a given step.'),
    ];

    eventObservables = [
        new Event('initialize$', 'IStepOption[]', 'The tour is configured with a set of steps'),
        new Event('stepShow$', 'IStepOption', 'A step is shown'),
        new Event('stepHide$', 'IStepOption', 'A step is hidden'),
        new Event('start$', 'IStepOption', 'The tour begins'),
        new Event('ends$', 'any', 'The tour ends'),
        new Event('pause$', 'IStepOption', 'The tour is paused'),
        new Event('resume$', 'IStepOption', 'The tour resumes'),
        new Event('anchorRegister$', 'string', 'An anchor is registered with the tour'),
        new Event('anchorUnregister$', 'string', 'An anchor is unregistered from the tour'),
    ];
}
