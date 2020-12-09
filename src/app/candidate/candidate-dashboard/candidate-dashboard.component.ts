import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Question } from 'src/app/data/model/quiz.model';
import { QuizEffects } from 'src/app/store/quiz/quiz.effects';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';

@Component({
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css'],
})
export class CandidateDashboardComponent implements OnInit {
  questionId: string;
  question: Question;
  destroy$: Subject<{}> = new Subject();
  isAnswered: Subject<string> = new Subject<string>();

  constructor(
    private quizStoreService: QuizStoreService,
    private quizEffects: QuizEffects
  ) {}
  ngOnInit() {
    this.quizStoreService.getQuiz();
  }

  loadTest() {
    this.quizStoreService.getQuiz();
  }
}
