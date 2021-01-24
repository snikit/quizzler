import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Optional,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Topic } from 'src/app/@data/model/topic.model';

@Component({
  selector: 'app-topic-create-or-edit',
  templateUrl: './topic-create-or-edit.component.html',
  styleUrls: ['./topic-create-or-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCreateOrEditComponent implements OnInit {
  @Input()
  editMode = false;
  @Input()
  topic: Topic;

  constructor(
    @Optional() public ref: DynamicDialogRef,
    @Optional() public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.ref) {
      this.topic = this.config.data.subject
        ? this.config.data.subject
        : {
            id: null,
            label: null,
          };
    }
  }

  save() {
    console.log(this.topic);
    this.ref.close(this.topic);
  }
}
