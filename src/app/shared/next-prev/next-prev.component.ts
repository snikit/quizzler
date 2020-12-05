import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-next-prev',
  templateUrl: './next-prev.component.html',
  styleUrls: ['./next-prev.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextPrevComponent implements OnInit {
  @Input()
  right = false;

  constructor() {}

  ngOnInit(): void {}
}
