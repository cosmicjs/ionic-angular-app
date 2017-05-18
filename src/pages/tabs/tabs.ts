import { Component } from '@angular/core';

import { CategoriesList } from '../categories_list/categories_list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CategoriesList;

  constructor() {

  }
}
