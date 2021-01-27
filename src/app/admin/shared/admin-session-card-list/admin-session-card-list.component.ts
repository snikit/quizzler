import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-session-card-list',
  templateUrl: './admin-session-card-list.component.html',
  styleUrls: ['./admin-session-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSessionCardListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuitems = [
    {
      label: 'Options',
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {},
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {},
        },
      ],
    },
  ];
}
