import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Quiz } from 'src/app/data/model/quiz.model';
import * as QuizActions from './quiz.actions';

export const QuizFeatureToken = 'quiz';

export interface QuizStore {
  quiz: State;
}

export interface State {
  loaded: boolean;
  quiz: Quiz;

  //---------------------------
  currentQuestionIndex: number;
}

const initialState: State = {
  loaded: false,
  quiz: null,
  currentQuestionIndex: 0,
};

export function reducer(
  state = initialState,
  action: QuizActions.Actions
): State {
  switch (action.type) {
    case QuizActions.GET_QUIZ: {
      return {
        ...state,
        loaded: false,
        currentQuestionIndex: 0,
      };
    }
    case QuizActions.GET_QUIZ_SUCCESS: {
      return {
        ...state,
        loaded: true,
        quiz: action.payload,
      };
    }

    case QuizActions.GET_QUESTION: {
      return {
        ...state,
      };
    }
    // case QuizActions.GET_QUESTION_SUCCESS: {
    //   return {
    //     ...state,

    //   };
    // }

    case QuizActions.GET_QUESTION_PREVIOUS: {
      const currentIndex = state.currentQuestionIndex - 1;

      return {
        ...state,
        currentQuestionIndex:
          currentIndex >= 0 ? currentIndex : state.currentQuestionIndex,
      };
    }

    case QuizActions.GET_QUESTION_NEXT: {
      const currentIndex = state.currentQuestionIndex + 1;

      return {
        ...state,
        currentQuestionIndex:
          currentIndex < state.quiz.questions.length
            ? currentIndex
            : state.currentQuestionIndex,
      };
    }

    case QuizActions.ANSWER_QUESTION: {
      if (!action.payload.answer) {
        throw new Error('ANSWER_QUESTION_ERROR');
      }

      const questions = [...state.quiz.questions];
      const currentQuestion = { ...questions[state.currentQuestionIndex] };
      currentQuestion.isAnswered = true;
      currentQuestion.userAnswer = action.payload;

      questions[state.currentQuestionIndex] = currentQuestion;

      return {
        ...state,
        quiz: {
          ...state.quiz,
          questions: questions,
        },
      };
    }

    /* case QuizActions.ANSWER_QUESTION: {
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
    } */
    // case QuizActions.GET_SCORE: {
    //   return {
    //     ...state,
    //     loading: false,
    //     questionQueue: [],
    //     currentQuestion: null,
    //     isFinised: true,
    //     answers: state.answers.sort((a, b) => a.questionId - b.questionId), // sorting answers before showing score
    //   };
    // }
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
  (state: State) => state.quiz.questions[state.currentQuestionIndex]
);

// export const selectQuizStatus = createSelector(
//   selectQuizState,
//   (state: State) => state.isFinised
// );

// export const selectQuizProgress = createSelector(
//   selectQuizState,
//   (state: State) =>
//     state.quiz
//       ? state.quiz.questions
//         ? `${state.progress}/${state.quiz.questions.length}`
//         : null
//       : null
// );

// export const selectScoreDetails = createSelector(
//   selectQuizState,
//   (state: State) => state.answers
// );

export const selectQuizInstructions = createSelector(
  selectQuizState,
  (state: State) => state.quiz.instruction
);

export const selectIsQuizLoaded = createSelector(
  selectQuizState,
  (state: State) => state.loaded
);

export const selectQuizDetails = createSelector(
  selectQuizState,
  (state: State) => {
    return {
      title: state.quiz.title,
      subtitle: state.quiz.subtitle,
      timer: state.quiz.timer,
      details: state.quiz.details,
      sections: state.quiz.sections,
    } as Quiz;
  }
);

// export const selectScore = createSelector(
//   selectQuizState,
//   (state: State) =>
//     state.answers
//       .map((answer) => answer.answerIndex)
//       .filter((index) => index === 0).length
// );
