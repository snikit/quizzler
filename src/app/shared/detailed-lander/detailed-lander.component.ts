import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-detailed-lander',
  templateUrl: './detailed-lander.component.html',
  styleUrls: ['./detailed-lander.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedLanderComponent implements OnInit {
  @Input()
  heading = 'default heading';

  @Input()
  subheading = 'default subheading';

  constructor() {}

  ngOnInit(): void {}
}
