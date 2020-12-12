import { ElementRef, Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RootAnimateService {
  private ANIMATE_CSS_BASE_CLASS = 'animate__animated';
  private ANIMATE_CSS_ANIMATION_CLASS = {
    SHAKE_X: 'animate__shakeX',
    FADE_IN_RIGHT: 'animate__fadeInRight',
    FADE_IN_LEFT: 'animate__fadeInLeft',
  };

  constructor() {}

  fadeInLeft(element: ElementRef<HTMLElement>, time: number = 500) {
    this.animate(element, time, this.ANIMATE_CSS_ANIMATION_CLASS.FADE_IN_LEFT);
  }

  fadeInRight(element: ElementRef<HTMLElement>, time: number = 500) {
    this.animate(element, time, this.ANIMATE_CSS_ANIMATION_CLASS.FADE_IN_RIGHT);
  }

  shakeX(element: ElementRef<HTMLElement>, time: number = 500) {
    this.animate(element, time, this.ANIMATE_CSS_ANIMATION_CLASS.SHAKE_X);
  }

  private animate(
    element: ElementRef<HTMLElement>,
    time: number,
    animateCssClass: string
  ) {
    element.nativeElement.classList.add(
      this.ANIMATE_CSS_BASE_CLASS,
      animateCssClass
    );

    timer(time)
      .pipe(first())
      .subscribe(() => {
        element.nativeElement.classList.remove(
          this.ANIMATE_CSS_BASE_CLASS,
          animateCssClass
        );
      });
  }
}
