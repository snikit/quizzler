import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Optional,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Section } from 'src/app/@data/model/section.model';

@Component({
  selector: 'app-section-create-or-edit',
  templateUrl: './section-create-or-edit.component.html',
  styleUrls: ['./section-create-or-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionCreateOrEditComponent implements OnInit {
  @Input()
  editMode = false;
  @Input()
  section: Section;

  constructor(
    @Optional() public ref: DynamicDialogRef,
    @Optional() public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.ref) {
      this.section = this.config.data.section
        ? this.config.data.section
        : {
            id: null,
            label: null,
          };
    }
  }

  save() {
    console.log(this.section);
    this.ref.close(this.section);
  }
}
