import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/@data/model/quiz.model';
import { QuizStoreService } from 'src/app/@store/quiz/quiz.store.service';

@Component({
  selector: 'app-section-lander',
  templateUrl: './section-lander.component.html',
  styleUrls: ['./section-lander.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionLanderComponent implements OnInit {
  details: Details;

  constructor(private quizStore: QuizStoreService, private router: Router) {
    this.quizStore.sectionDetails.subscribe((details) => {
      this.details = {
        title: details.title,
        subtitle: details.subtitle,
      };
    });
  }

  ngOnInit(): void {}

  onNext() {
    this.router.navigateByUrl('candidate/test/start');
  }
}
