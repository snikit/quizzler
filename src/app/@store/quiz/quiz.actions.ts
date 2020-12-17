import { Action } from '@ngrx/store';
import { Answering, Quiz } from 'src/app/@data/model/quiz.model';
import { QuestionAnswer } from 'src/app/@data/model/quiz.model';

export const GET_QUIZ = 'Get Quiz';
export const GET_QUIZ_SUCCESS = 'Get Quiz Success';
export const GET_QUIZ_FAIL = 'Get Quiz Fail';

export const GET_QUESTION = 'Get Question from Quiz';
export const GET_QUESTION_SUCCESS = 'Get Question Success';
export const GET_QUESTION_FAIL = 'Get Question Fail';

export const GET_QUESTION_NEXT = 'Get Question Next';
export const GET_QUESTION_PREVIOUS = 'Get Question Previous';

export const ANSWER_QUESTION = 'Answer the Question';
export const ANSWER_SUCCESS = 'Answer Success';
export const ANSWER_FAIL = 'Answer Fail';

export const QUESTION_SET_INDEX = 'Question Set Index';
export const QUESTION_BOOKMARK_TOGGLE = 'Question Bookmark Toggle';

export const SECTION_SET_INDEX = 'Section Set Index';

export const GET_SCORE = 'Get Score';

export class GetQuiz implements Action {
  readonly type = GET_QUIZ;
  constructor() {}
}

export class GetQuizSuccess implements Action {
  readonly type = GET_QUIZ_SUCCESS;
  constructor(public payload: Quiz) {}
}

export class GetQuizFail implements Action {
  readonly type = GET_QUIZ_FAIL;
  constructor() {}
}

export class GetQuestion implements Action {
  readonly type = GET_QUESTION;
  constructor() {}
}

export class GetQuestionSuccess implements Action {
  readonly type = GET_QUESTION_SUCCESS;
  constructor() {}
}

export class GetQuestionFail implements Action {
  readonly type = GET_QUESTION_FAIL;
  constructor(public payload: boolean) {}
}

export class GetQuestionNext implements Action {
  readonly type = GET_QUESTION_NEXT;
  constructor(public payload: boolean) {}
}

export class GetQuestionPrevious implements Action {
  readonly type = GET_QUESTION_PREVIOUS;
  constructor(public payload: boolean) {}
}

// export class AnswerQuestion implements Action {
//   readonly type = ANSWER_QUESTION;
//   constructor(public payload: Answering) {}
// }

export class AnswerQuestion implements Action {
  readonly type = ANSWER_QUESTION;
  constructor(public payload: QuestionAnswer) {}
}

export class AnswerSuccess implements Action {
  readonly type = ANSWER_SUCCESS;
  constructor(public payload: Answering) {}
}

export class AnswerFail implements Action {
  readonly type = ANSWER_FAIL;
  constructor() {}
}

export class GetScore implements Action {
  readonly type = GET_SCORE;
  constructor() {}
}

export class SetQuestionIndex implements Action {
  readonly type = QUESTION_SET_INDEX;
  constructor(public payload: number) {}
}

export class SetSectionIndex implements Action {
  readonly type = SECTION_SET_INDEX;
  constructor(public payload: number) {}
}

export class BookmarkToggleQuestion implements Action {
  readonly type = QUESTION_BOOKMARK_TOGGLE;
  constructor() {}
}

export type Actions =
  | GetQuestionPrevious
  | GetQuiz
  | GetQuestionNext
  | GetQuizSuccess
  | GetQuizFail
  | GetQuestion
  | GetQuestionSuccess
  | GetQuestionFail
  | AnswerQuestion
  | AnswerSuccess
  | AnswerFail
  | GetScore
  | SetQuestionIndex
  | SetSectionIndex
  | BookmarkToggleQuestion;
