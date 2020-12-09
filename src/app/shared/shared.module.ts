import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionerComponent } from './questioner/questioner.component';
import { QuestionNavComponent } from './question-nav/question-nav.component';
import { NextPrevComponent } from './next-prev/next-prev.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { TestInstructionsComponent } from './test-instructions/test-instructions.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TestDetailsComponent } from './test-details/test-details.component';
import { DeadCenterComponent } from './layout/dead-center/dead-center.component';
import { SubmissionReviewComponent } from './submission-review/submission-review.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    QuestionComponent,
    QuestionerComponent,
    QuestionNavComponent,
    NextPrevComponent,
    TestInstructionsComponent,
    TestDetailsComponent,
    DeadCenterComponent,
    SubmissionReviewComponent,
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    CardModule,
    SidebarModule,
    FieldsetModule,
    PanelModule,
    AccordionModule,
    TableModule,
    ButtonModule,
  ],
  exports: [
    QuestionerComponent,
    TestInstructionsComponent,
    TestDetailsComponent,
    DeadCenterComponent,
    QuestionNavComponent,
    NextPrevComponent,
    QuestionComponent,
    SubmissionReviewComponent,
  ],
})
export class SharedModule {}
