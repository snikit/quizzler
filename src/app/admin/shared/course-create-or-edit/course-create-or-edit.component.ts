import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Optional,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Course } from 'src/app/@data/model/course.model';

@Component({
  selector: 'app-course-create-or-edit',
  templateUrl: './course-create-or-edit.component.html',
  styleUrls: ['./course-create-or-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCreateOrEditComponent implements OnInit {
  @Input()
  editMode = false;
  @Input()
  course: Course;

  constructor(
    @Optional() public ref: DynamicDialogRef,
    @Optional() public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.ref) {
      this.course = this.config.data.course
        ? this.config.data.course
        : {
            id: null,
            label: null,
          };
    }
  }

  save() {
    console.log(this.course);
    this.ref.close(this.course);
  }
}
