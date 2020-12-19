import { CandidateTestDoneComponent } from './candidate-test-done/candidate-test-done.component';
import { CandiddateDetailsComponent } from './candidate-registration/screens/candiddate-details/candiddate-details.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { CandidateTestHomeComponent } from './candidate-test-home/candidate-test-home.component';
import { CandidateTestDetailsComponent } from './candidate-test-details/candidate-test-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidateInstructionsComponent } from './candidate-instructions/candidate-instructions.component';
import { CandidateTestComponent } from './candidate-test/candidate-test.component';

import { CandidateComponent } from './candidate.component';
import { CandidateIdPhotoComponent } from './candidate-registration/screens/candidate-id-photo/candidate-id-photo.component';
import { CandidatePhotoComponent } from './candidate-registration/screens/candidate-photo/candidate-photo.component';
import { QuizRouteGuardService } from './@core/guards/quiz.guard.service';
import { SectionLanderComponent } from './section/section-lander/section-lander.component';

const routes: Routes = [
  {
    path: 'section',
    component: SectionLanderComponent,
  },
  {
    path: '',
    component: CandidateComponent,
    children: [{ path: '', component: CandidateDashboardComponent }],
  },
  {
    path: 'test',
    component: CandidateTestHomeComponent,
    canActivate: [QuizRouteGuardService],
    children: [
      { path: 'done', component: CandidateTestDoneComponent }, //auth guard test is done
      { path: 'section', component: SectionLanderComponent },
      { path: 'start', component: CandidateTestComponent },
      { path: 'details', component: CandidateTestDetailsComponent },
      { path: 'instructions', component: CandidateInstructionsComponent },
    ],
  },
  {
    path: 'registration',
    component: CandidateRegistrationComponent,
    children: [
      { path: '', component: CandiddateDetailsComponent },
      { path: 'photo', component: CandidatePhotoComponent },
      { path: 'id-photo', component: CandidateIdPhotoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
