import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Section } from 'src/app/@data/model/section.model';
import { SectionCreateOrEditComponent } from '../section-create-or-edit/section-create-or-edit.component';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCreateComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}
  testInfo = {
    title: 'Senior Java Engineer Part 1Engineer Part 1Engineer Part 1',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut laboradipiscing elit, sed do eiusmodtempor incididunt ut labor.',
    imgsrc: '/assets/imgs/avatar (5).svg',
    categories: ['algorithm', 'program', 'fraction', 'dynamic'],
  };

  showModal(section: Section = null, editMode = false) {
    const ref = this.dialogService.open(SectionCreateOrEditComponent, {
      data: {
        editMode: editMode,
        section: section,
      },
      width: '600px',
      dismissableMask: true,
      header: editMode ? 'EDIT SECTION' : 'ADD SECTION',
    });

    ref.onClose.subscribe((section) => {
      console.log(section);
      console.log(editMode);
    });
  }

  sections = [
    {
      subject: 'QWS',
      topic: 'functional programming',
      level: '5',
      count: 30,
    },
    {
      subject: 'JAVA PROGRAMMING',
      topic: 'oops',
      level: '1',
      count: 300,
    },
    {
      subject: 'DATABASE',
      topic: 'SQL',
      level: '5',
      count: 30,
    },
  ];
}
