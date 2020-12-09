import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Answering, Question, Quiz } from '../../../data/model/quiz.model';
import * as QuizActions from '../quiz.actions';

export const QuizFeatureToken = 'quiz';

export interface QuizStore {
  quiz: State;
}

export interface State {
  loading: boolean; // loading indicator for POST events
  quiz: Quiz;
  questionQueue: Question[]; // questions that will be answered
  currentQuestion: Question; // question that is displayed on screen
  answers: Answering[]; // answers are stored to show the score at the end
  isFinised: boolean;
  progress: number;
}

const initialState: State = {
  loading: false,
  quiz: null,
  questionQueue: [],
  currentQuestion: null,
  answers: [],
  isFinised: false,
  progress: 0,
};

export function reducer(
  state = initialState,
  action: QuizActions.Actions
): State {
  switch (action.type) {
    case QuizActions.GET_QUIZ: {
      return {
        ...state,
        loading: true,
        answers: [],
        progress: 0,
      };
    }
    case QuizActions.GET_QUIZ_SUCCESS: {
      console.log(state);
      console.log(action);
      return {
        ...state,
        loading: false,
        isFinised: false,
        quiz: action.payload,
        questionQueue: action.payload.questions,
      };
    }

    case QuizActions.GET_QUESTION: {
      return {
        ...state,
      };
    }
    case QuizActions.GET_QUESTION_SUCCESS: {
      return {
        ...state,
        currentQuestion: action.payload, // first question in the queue
        questionQueue: state.questionQueue.filter((item, index) => index > 0), // removing first element in the queue
        progress: state.progress + 1,
      };
    }
    case QuizActions.ANSWER_QUESTION: {
      return {
        ...state,
        loading: true,
      };
    }
    case QuizActions.ANSWER_SUCCESS: {
      return {
        ...state,
        loading: false,
        answers: [...state.answers, action.payload],
        progress: [...state.answers, action.payload].length,
      };
    }
    case QuizActions.ANSWER_FAIL: {
      return {
        ...state,
        loading: false,
        questionQueue: [...state.questionQueue, state.currentQuestion],
      };
    }
    case QuizActions.GET_SCORE: {
      return {
        ...state,
        loading: false,
        questionQueue: [],
        currentQuestion: null,
        isFinised: true,
        answers: state.answers.sort((a, b) => a.questionId - b.questionId), // sorting answers before showing score
      };
    }
    default: {
      return state;
    }
  }
}

export const selectQuizState = createFeatureSelector<State>(QuizFeatureToken);

// export const selectQuizState = (state: QuizState) => {
//   console.log(state);
//   return state;
// };
export const selectQuestion = createSelector(
  selectQuizState,
  (state: State) => state.currentQuestion
);

export const selectQuizStatus = createSelector(
  selectQuizState,
  (state: State) => state.isFinised
);

export const selectQuizProgress = createSelector(
  selectQuizState,
  (state: State) =>
    state.quiz
      ? state.quiz.questions
        ? `${state.progress}/${state.quiz.questions.length}`
        : null
      : null
);

export const selectScoreDetails = createSelector(
  selectQuizState,
  (state: State) => state.answers
);

export const selectQuizInstructions = createSelector(
  selectQuizState,
  (state: State) => state.quiz.instruction
);

export const selectQuizDetails = createSelector(
  selectQuizState,
  (state: State) => {
    return {
      title: state.quiz.title,
      subtitle: state.quiz.subtitle,
      timer: state.quiz.timer,
      details: state.quiz.details,
    } as Quiz;
  }
);

export const selectScore = createSelector(
  selectQuizState,
  (state: State) =>
    state.answers
      .map((answer) => answer.answerIndex)
      .filter((index) => index === 0).length
);
