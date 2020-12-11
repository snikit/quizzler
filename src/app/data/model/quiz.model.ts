import { Instruction, Section } from './question.model';

export interface Quiz {
  id: number;
  title: string;
  subtitle: string;
  details: string;
  timer: number;
  instruction: Instruction;
  questions: Question[];
  sections: Section[];
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface QuestionAnswer {
  question: {
    id: number;
  };
  answer: {
    id: string;
  };
}

export interface Answer {
  text: string;
  Index: number;
  id: string;
}

export interface Answering {
  questionId: number;
  answerIndex: number;
}
