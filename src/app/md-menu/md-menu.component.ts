import { TourService } from '@ngx-tour/md-menu';
import { Component, OnDestroy } from '@angular/core';

import { EventBrokerService, IEventListener } from './../util/services/event-broker.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'md-menu-route',
  templateUrl: './md-menu.component.html',
})
export class MdMenuComponent implements OnDestroy {
  private startTourListener: IEventListener;

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
      anchorId: 'config.enableBackdrop',
      content: 'You can enable backdrop to highlight active element.',
      title: 'Backdrop',
      enableBackdrop: true
    }, {
      anchorId: 'config.route',
      content: 'Tours can span multiple routes.',
      title: 'Route',
    }, {
      anchorId: 'another.route',
      content: 'Like this!',
      route: 'md-menu/other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      placement: 'below',
      title: 'Route Return',
    }, {
      anchorId: 'config.buttons.custom',
      content: 'You can set custom step button names',
      title: 'Button Titles',
      prevBtnTitle: 'My Prev',
      nextBtnTitle: 'My Next',
      endBtnTitle: 'My End'
    }, {
      anchorId: 'hotkeys',
      content: 'Try using the hotkeys to navigate through the tour.',
      title: 'Hotkeys',
    }, {
      anchorId: 'events',
      content: 'You can subscribe to events',
      title: 'Events',
    }], {
      route: 'md-menu',
    });

    this.startTourListener = this.eventBroker.listen<boolean>("start-tour",(value:boolean)=>{
      this.tourService.start();
    });
  }

  public ngOnDestroy() {
    this.startTourListener.ignore();
  }
}
