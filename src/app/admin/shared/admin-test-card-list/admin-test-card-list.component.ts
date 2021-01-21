import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-test-card-list',
  templateUrl: './admin-test-card-list.component.html',
  styleUrls: ['./admin-test-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTestCardListComponent implements OnInit {
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
