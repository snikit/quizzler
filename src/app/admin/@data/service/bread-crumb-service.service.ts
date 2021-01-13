import { Injectable } from '@angular/core';

@Injectable()
export class BreadCrumbService {
  private _crumbs = [];

  constructor() {}

  addCrumb(key) {
    switch (key) {
      case 'TEST_MAKER':
        this._crumbs.push({
          title: 'TEST LIST',
        });
        break;

      case 'testview':
        this._crumbs.push({
          title: 'TEST LIST',
        });
        break;
    }
  }

  get crumbs() {
    return this._crumbs;
  }
}
