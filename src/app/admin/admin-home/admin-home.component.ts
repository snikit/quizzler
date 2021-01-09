import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  @ViewChild('inContent')
  inContent: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {}

  onTabSelect(event: any) {
    console.log(event);
  }

  onTabToggle(visible: boolean) {
    this.inContent.nativeElement.style.paddingLeft = visible ? '100px' : '0px';
  }
}
