import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-candidate-photo',
  templateUrl: './candidate-photo.component.html',
  styleUrls: ['./candidate-photo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatePhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
