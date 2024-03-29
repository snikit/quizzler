import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';
import { QuizModule } from '../@store/quiz/quiz.module';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidateInstructionsComponent } from './candidate-instructions/candidate-instructions.component';
import { CandidateNavComponent } from './candidate-nav/candidate-nav.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { CandidateIdPhotoComponent } from './candidate-registration/screens/candidate-id-photo/candidate-id-photo.component';
import { CandidatePhotoComponent } from './candidate-registration/screens/candidate-photo/candidate-photo.component';
import { CandiddateDetailsComponent } from './candidate-registration/screens/candiddate-details/candiddate-details.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateTestDetailsComponent } from './candidate-test-details/candidate-test-details.component';
import { CandidateTestHomeComponent } from './candidate-test-home/candidate-test-home.component';
import { CandidateTestComponent } from './candidate-test/candidate-test.component';
import { CandidateComponent } from './candidate.component';
import { QuizRouteGuardService } from './@core/guards/quiz.guard.service';
import { QuestionService } from './@core/services/question.service';
import { SectionLanderComponent } from './section/section-lander/section-lander.component';
import { CandidateTestDoneComponent } from './candidate-test-done/candidate-test-done.component';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidateDashboardComponent,
    CandidateTestComponent,
    CandidateInstructionsComponent,
    CandidateTestDetailsComponent,
    CandidateTestHomeComponent,
    CandidateNavComponent,
    CandidateRegistrationComponent,
    CandiddateDetailsComponent,
    CandidatePhotoComponent,
    CandidateIdPhotoComponent,
    SectionLanderComponent,
    CandidateTestDoneComponent,
  ],
  providers: [QuestionService, QuizRouteGuardService],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    SharedModule,
    HttpClientModule,
    QuizModule,
    SidebarModule,
    ToastModule,
    ProgressBarModule,
  ],
})
export class CandidateModule {}
