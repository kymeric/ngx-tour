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
    codeInstall = `npm install @ngx-tour/core @ngx-tour/console`;
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
        new Property('enableBackdrop', 'boolean', 'false', 'Controls whether to enable active element highlighting', 'config.enableBackdrop'),
        new Property('route', 'string | UrlSegment[]', 'undefined', 'The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted.', 'config.route'),
        new Property('nextStep', 'number | string', 'undefined', 'The step index or stepId of the next step. If undefined, the next step in the steps array is used.', 'config.nextStep'),
        new Property('prevStep', 'number | string', 'undefined', 'The step index or stepId of the previous step. If undefined, the previous step in the steps array is used.'),
        new Property('placement', '\'above\' | \'below\' | \'after\' | \'before\' | \'left\' | \'right\'', 'above', 'Where the tour step should be places with respect to the anchor (only used in print)', 'config.placement.default'),
        new Property('preventScrolling', 'boolean', 'false', 'Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to <code>true</code> will disable the scroll behavior.'),
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
