import { Subject } from './../../../@data/model/subject.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Optional,
  Input,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-subject-create-or-edit',
  templateUrl: './subject-create-or-edit.component.html',
  styleUrls: ['./subject-create-or-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectCreateOrEditComponent implements OnInit {
  @Input()
  editMode = false;
  @Input()
  subject: Subject;

  constructor(
    @Optional() public ref: DynamicDialogRef,
    @Optional() public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.ref) {
      this.subject = this.config.data.subject
        ? this.config.data.subject
        : {
            id: null,
            label: null,
          };
    }
  }

  save() {
    console.log(this.subject);
    this.ref.close(this.subject);
  }
}
