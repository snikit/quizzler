import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onTabSelect(event: any) {
    console.log(event);
  }
}
