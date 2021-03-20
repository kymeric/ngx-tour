import { Component } from '@angular/core';

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
}
