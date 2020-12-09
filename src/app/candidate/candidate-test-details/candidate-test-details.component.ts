import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/data/model/quiz.model';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';

@Component({
  templateUrl: './candidate-test-details.component.html',
  styleUrls: ['./candidate-test-details.component.css'],
})
export class CandidateTestDetailsComponent implements OnInit {
  details$ = new Observable<Quiz>();

  constructor(quizStoreService: QuizStoreService, private router: Router) {
    this.details$ = quizStoreService.quizDetails;
  }

  ngOnInit(): void {}

  onStart(): void {
    this.router.navigateByUrl('candidate/test/start');
  }
}
