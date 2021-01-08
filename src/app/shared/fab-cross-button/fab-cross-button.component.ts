import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-fab-cross-button',
  templateUrl: './fab-cross-button.component.html',
  styleUrls: ['./fab-cross-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabCrossButtonComponent implements OnInit {
  @Input()
  tooltip: string;

  constructor() {}

  ngOnInit(): void {}
}
