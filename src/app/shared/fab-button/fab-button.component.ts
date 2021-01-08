import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabButtonComponent implements OnInit {
  @Input()
  tooltip: string;

  constructor() {}

  ngOnInit(): void {}
}
