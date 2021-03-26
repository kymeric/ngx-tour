import { TourService } from '@ngx-tour/console';
import { Component, OnDestroy } from '@angular/core';

import { EventBrokerService, IEventListener } from './../util/services/event-broker.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'console-route',
  templateUrl: './console.component.html',
})
export class ConsoleComponent implements OnDestroy {
  private startTourListener: IEventListener;
  private nextStepListener: IEventListener;
  private prevStepListener: IEventListener;

  constructor(public tourService: TourService, private eventBroker: EventBrokerService) {
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the Ngx-Tour tour!',
      placement: 'below',
      title: 'Welcome',
    }, {
      anchorId: 'installation',
      content: 'First, install the library...',
      title: 'Installation',
    }, {
      anchorId: 'usage',
      content: '...then use it.',
      title: 'Usage',
    }, {
      anchorId: 'tourService.start',
      content: 'Don\'t forget to actually start the tour.',
      title: 'Start the tour',
    }, {
      anchorId: 'config.anchorId',
      content: 'Every step needs an anchor.',
      title: 'Anchor',
    }, {
      anchorId: 'config.route',
      content: 'Tours can span multiple routes.',
      title: 'Route',
    }, {
      anchorId: 'another.route',
      content: 'Like this!',
      route: 'console/other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      placement: 'below',
      title: 'Route Return',
    }, {
      anchorId: 'config.placement.default',
      content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Sliiide to the left.',
      placement: 'left',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Sliiide to the right.',
      placement: 'right',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Take it back now y\'all.  One hop this time.',
      placement: 'below',
      title: 'Placement',
    }, {
      anchorId: 'hotkeys',
      content: 'Try using the hotkeys to navigate through the tour.',
      title: 'Hotkeys',
    }, {
      anchorId: 'events',
      content: 'You can subscribe to events',
      title: 'Events',
    }], {
      route: 'console',
    });

    this.startTourListener = this.eventBroker.listen<boolean>("start-tour",(value:boolean)=>{
      this.tourService.start();
    });
    this.nextStepListener = this.eventBroker.listen<boolean>("next-step",(value:boolean)=>{
      this.tourService.next();
    });
    this.prevStepListener = this.eventBroker.listen<boolean>("prev-step",(value:boolean)=>{
      this.tourService.prev();
    });
  }

  public ngOnDestroy() {
    this.startTourListener.ignore();
    this.nextStepListener.ignore();
    this.prevStepListener.ignore();
  }
}
