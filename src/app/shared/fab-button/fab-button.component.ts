import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabButtonComponent implements OnInit {
  checked = false;

  constructor() {}

  ngOnInit(): void {}
}
