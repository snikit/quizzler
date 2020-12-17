import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, asyncScheduler, scheduled } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QuizStoreService } from 'src/app/@store/quiz/quiz.store.service';

@Injectable()
export class QuizRouteGuardService implements CanActivate {
  constructor(private store: QuizStoreService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.isQuizLoaded.pipe(
      map((isLoaded) => {
        if (isLoaded) {
          return true;
        } else {
          this.router.navigate(['/candidate']);
          return false;
        }
      }),
      catchError((err) => {
        return scheduled([false], asyncScheduler);
      })
    );
  }
}
