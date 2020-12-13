import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
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
  @Input()
  visible = true;

  @Output()
  clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick($event) {
    this.clicked.emit($event);
  }
}
