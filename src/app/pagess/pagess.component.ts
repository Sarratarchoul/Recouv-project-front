import { Component } from '@angular/core';

import { MENU_ITEMS } from './pagess-menu';

@Component({
  selector: 'ngx-pagess',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagessComponent {

  menu = MENU_ITEMS;
}
