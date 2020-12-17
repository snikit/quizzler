import { Instruction } from './question.model';

export interface Details {
  title: string;
  subtitle: string;
}

export interface Quiz {
  id: number;
  title: string;
  subtitle: string;
  details: string;
  timer: number;
  instruction: Instruction;
  sections: Section[];
}

export interface Question {
  index?: number;
  sectionIndex?: number;
  isFirst?: boolean;
  isLast?: boolean;
  id: number;
  text: string;
  answers: Answer[];
  isAnswered?: boolean;
  isBookmarked?: boolean;
  isPosted?: boolean;
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

export interface Section {
  title: string;
  subtitle?: string;
  timer: number;
  instruction?: Instruction;
  type: string;
  questions: Question[];
  canSkipQuestions: boolean;
}
