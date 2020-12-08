export interface Answer {
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Answer[];
}

export interface Instruction {
  title: string;
  subtitle?: string;
  content: string;
}

export interface Test {
  title: string;
  subtitle: string;
  timer: number;
  instruction: Instruction;
  sections: Section[];
}

export interface Section {
  title: string;
  subtitle?: string;
  timer: number;
  instruction?: Instruction;
  noOfQuestions: number;
  type: string;
}
