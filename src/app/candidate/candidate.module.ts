import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidateTestComponent } from './candidate-test/candidate-test.component';
import { SharedModule } from '../shared/shared.module';
import { CandidateInstructionsComponent } from './candidate-instructions/candidate-instructions.component';
import { CandidateTestDetailsComponent } from './candidate-test-details/candidate-test-details.component';
import { CandidateTestHomeComponent } from './candidate-test-home/candidate-test-home.component';
import { CandidateNavComponent } from './candidate-nav/candidate-nav.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { CandiddateDetailsComponent } from './candidate-registration/screens/candiddate-details/candiddate-details.component';
import { CandidatePhotoComponent } from './candidate-registration/screens/candidate-photo/candidate-photo.component';
import { CandidateIdPhotoComponent } from './candidate-registration/screens/candidate-id-photo/candidate-id-photo.component';

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
  ],
  imports: [CommonModule, CandidateRoutingModule, SharedModule],
})
export class CandidateModule {}
