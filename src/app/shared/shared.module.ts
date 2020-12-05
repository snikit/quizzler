import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionerComponent } from './questioner/questioner.component';
import { QuestionNavComponent } from './question-nav/question-nav.component';
import { NextPrevComponent } from './next-prev/next-prev.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionerComponent,
    QuestionNavComponent,
    NextPrevComponent,
  ],
  imports: [CommonModule, ProgressBarModule, CardModule, SidebarModule],
  exports: [QuestionerComponent],
})
export class SharedModule {}
