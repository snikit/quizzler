import { QuizStoreService } from './quiz.store.service';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { QuizEffects } from './quiz.effects';
import { QuizFeatureToken, reducer } from './quiz.reducer';
import { QuizService } from './quiz.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    EffectsModule.forFeature([QuizEffects]),
    StoreModule.forFeature(QuizFeatureToken, reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [QuizService, QuizStoreService],
})
export class QuizModule {}
