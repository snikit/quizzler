import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Instruction } from 'src/app/data/model/question.model';
import { QuizStoreService } from 'src/app/store/quiz/quiz.store.service';

@Component({
  templateUrl: './candidate-instructions.component.html',
  styleUrls: ['./candidate-instructions.component.css'],
})
export class CandidateInstructionsComponent implements OnInit {
  instructions$ = new Observable<Instruction>();

  constructor(quizStoreService: QuizStoreService, private router: Router) {
    this.instructions$ = quizStoreService.quizInstructions;
  }

  ngOnInit(): void {}

  onStart(): void {
    this.router.navigateByUrl('candidate/test/details');
  }
}
