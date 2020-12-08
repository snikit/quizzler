// import { Answering, Quiz } from './../../../data/model/quiz.model';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class QuizService {
//   quiz: Quiz;

//   constructor(private http: HttpClient) {}

//   getQuiz(): Observable<any> {
//     return this.http
//       .post('/quiz', {})
//       .pipe(map((response: Response) => response.json()));
//   }

//   postAnswer(answer: Answering): Observable<any> {
//     return this.http.post('/answer', answer);
//   }
// }
