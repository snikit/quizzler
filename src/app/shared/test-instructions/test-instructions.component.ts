import { Instruction } from 'src/app/@data/model/question.model';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-test-instructions',
  templateUrl: './test-instructions.component.html',
  styleUrls: ['./test-instructions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInstructionsComponent implements OnInit {
  @Input()
  instruction: Instruction;

  @Output()
  startClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStartClick(): void {
    this.startClick.emit();
  }
}
