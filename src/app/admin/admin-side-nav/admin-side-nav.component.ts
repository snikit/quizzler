export const ADMIN_TABS = {
  HOME: 'HOME',
  USERS: 'USERS',
  FOLDER: 'FOLDER',
  CHAT: 'CHAT',
  SETTINGS: 'SETTINGS',
};

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('changeTabSize', [
      state(
        'open',
        style({
          width: '100px',
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
        })
      ),
      transition('open=>closed', animate('200ms')),
      transition('closed=>open', animate('200ms')),
    ]),
  ],
})
export class AdminSideNavComponent implements OnInit {
  navState = 'open';

  @Output()
  indexChange = new EventEmitter<any>();

  @ViewChild('sidenav')
  sidenav: ElementRef<HTMLDivElement>;

  sidenavClosed = false;

  tabs = [
    { iconClass: 'pi-home', tabKey: ADMIN_TABS.HOME },
    { iconClass: 'pi-users', tabKey: ADMIN_TABS.USERS },
    { iconClass: 'pi-folder', tabKey: ADMIN_TABS.FOLDER },
    { iconClass: 'pi-comment', tabKey: ADMIN_TABS.CHAT },
    { iconClass: 'pi-cog', tabKey: ADMIN_TABS.SETTINGS },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    this.sidenavClosed = !this.sidenavClosed;
    this.navState = this.sidenavClosed ? 'closed' : 'open';
  }

  activeIndex = 0;

  activate(index: number, key: string) {
    this.activeIndex = index;
    this.indexChange.emit({ index: this.activeIndex, key: key });
  }
}
