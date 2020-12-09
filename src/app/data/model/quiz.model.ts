import { Instruction } from './question.model';

export interface Quiz {
  id: number;
  title: string;
  subtitle: string;
  details: string;
  timer: number;
  instruction: Instruction;
  questions: Question[];
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  Index: number;
}

export interface Answering {
  questionId: number;
  answerIndex: number;
}
