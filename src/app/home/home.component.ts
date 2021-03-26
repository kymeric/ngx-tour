import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home-route',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {}

  scroll(el: HTMLElement) {
      el.scrollIntoView();
  }
}
