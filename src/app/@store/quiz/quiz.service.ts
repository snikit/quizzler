import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Answering, Section, Quiz } from 'src/app/@data/model/quiz.model';
import { data } from './backend/quiz';

@Injectable()
export class QuizService {
  quiz: Quiz;

  constructor(private http: HttpClient) {}

  getQuiz(): Observable<any> {
    return scheduled([data], asyncScheduler).pipe(delay(2));
  }

  postAnswer(answer: Answering): Observable<any> {
    return this.http.post('/answer', answer);
  }

  syncSection(section: Section) {
    return this.http.post('/section', section);
  }

  syncQuiz(quiz: Quiz) {
    return this.http.post('/quiz', quiz);
  }
}
