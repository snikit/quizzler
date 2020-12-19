import { Action } from '@ngrx/store';
import { Answering, Quiz } from 'src/app/@data/model/quiz.model';
import { QuestionAnswer } from 'src/app/@data/model/quiz.model';

export const GET_QUIZ = 'Get Quiz';
export const GET_QUIZ_SUCCESS = 'Get Quiz Success';
export const GET_QUIZ_FAIL = 'Get Quiz Fail';
export const QUIZ_COMPLETE = 'Quiz Completed';

export const MAKE_QUIZ_PROGRESS = 'Make Quiz Progress';
export const MAKE_QUIZ_PROGRESS_ON_SECTION = 'Make Quiz Progress [on section]';
export const MAKE_QUIZ_PROGRESS_ON_SCORE = 'Make Quiz Progress [on score]';

export const GET_QUESTION = 'Get Question from Quiz';
export const GET_QUESTION_SUCCESS = 'Get Question Success';
export const GET_QUESTION_FAIL = 'Get Question Fail';

export const GET_QUESTION_NEXT = 'Get Question Next';
export const GET_QUESTION_PREVIOUS = 'Get Question Previous';

export const ANSWER_QUESTION = 'Answer the Question';
export const POST_ANSWER = 'Post the Question';
export const POST_ANSWER_RESULT = 'Post the Question [Result]';

export const ANSWER_SUCCESS = 'Answer Success';
export const ANSWER_FAIL = 'Answer Fail';

export const QUESTION_SET_INDEX = 'Question Set Index';
export const QUESTION_BOOKMARK_TOGGLE = 'Question Bookmark Toggle';

export const SECTION_SET_INDEX = 'Section Set Index';
export const SECTION_COMPLETE = 'Section Complete';

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

export class MakeQuizProgress implements Action {
  readonly type = MAKE_QUIZ_PROGRESS;
  constructor() {}
}

export class MakeQuizProgress_OnSection implements Action {
  readonly type = MAKE_QUIZ_PROGRESS_ON_SECTION;
  constructor() {}
}

export class MakeQuizProgress_OnScore implements Action {
  readonly type = MAKE_QUIZ_PROGRESS_ON_SCORE;
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

export class PostAnswer implements Action {
  readonly type = POST_ANSWER;
  constructor(public questionIndex: number, public sectionIndex: number) {}
}

export class PostAnswerResult implements Action {
  readonly type = POST_ANSWER_RESULT;
  constructor(
    public questionIndex: number,
    public sectionIndex: number,
    public isSuccess: boolean
  ) {}
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

export class SectionComplete implements Action {
  readonly type = SECTION_COMPLETE;
  constructor(public payload: number) {}
}

export class QuizComplete implements Action {
  readonly type = QUIZ_COMPLETE;
  constructor() {}
}

export class BookmarkToggleQuestion implements Action {
  readonly type = QUESTION_BOOKMARK_TOGGLE;
  constructor() {}
}

export type Actions =
  | GetQuestionPrevious
  | GetQuiz
  | QuizComplete
  | GetQuestionNext
  | GetQuizSuccess
  | GetQuizFail
  | MakeQuizProgress
  | MakeQuizProgress_OnSection
  | MakeQuizProgress_OnScore
  | GetQuestion
  | GetQuestionSuccess
  | GetQuestionFail
  | PostAnswer
  | PostAnswerResult
  | AnswerQuestion
  | AnswerSuccess
  | AnswerFail
  | GetScore
  | SetQuestionIndex
  | SetSectionIndex
  | SectionComplete
  | BookmarkToggleQuestion;
