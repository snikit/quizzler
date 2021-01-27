import { Injectable } from '@angular/core';

@Injectable()
export class AdminMngmntService {
  lastActiveTab: string;

  constructor() {}

  setLastActiveTab(tabKey: string) {
    this.lastActiveTab = tabKey;
  }

  getLastActiveTab() {
    return this.lastActiveTab;
  }
}
