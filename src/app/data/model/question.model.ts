import { textChangeRangeIsUnchanged } from 'typescript';

export interface Answer {
  text: string;
}

export interface Question {
  text: string;
  options: Answer[];
}

export interface Test {
  title: string;
  subtitle: string;
  timer: string;
}
