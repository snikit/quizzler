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
  index?: number;
  isFirst?: boolean;
  isLast?: boolean;
  id: number;
  text: string;
  answers: Answer[];
  isAnswered?: boolean;
  userAnswer?: QuestionAnswer;
}

export interface QuestionAnswer {
  // question: {
  //   id: number;
  // };
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
