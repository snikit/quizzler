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
