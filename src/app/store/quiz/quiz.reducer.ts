import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Quiz, Question } from 'src/app/data/model/quiz.model';
import * as QuizActions from './quiz.actions';

export const QuizFeatureToken = 'quiz';

export interface Store {
  quizState: State;
}

export interface State {
  loaded: boolean;
  quiz: Quiz;
  currentQuestionIndex: number;
  currentSectionIndex: number;
}

const initialState: State = {
  loaded: false,
  quiz: null,
  currentQuestionIndex: 0,
  currentSectionIndex: 0,
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
        currentSectionIndex: 0,
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
          currentIndex <
          state.quiz.sections[state.currentSectionIndex].questions.length
            ? currentIndex
            : state.currentQuestionIndex,
      };
    }

    case QuizActions.ANSWER_QUESTION: {
      if (!action.payload.answer) {
        throw new Error('ANSWER_QUESTION_ERROR');
      }

      const questions = [
        ...state.quiz.sections[state.currentSectionIndex].questions,
      ];
      const currentQuestion = { ...questions[state.currentQuestionIndex] };
      currentQuestion.isAnswered = true;
      currentQuestion.userAnswer = action.payload;

      questions[state.currentQuestionIndex] = currentQuestion;

      const sections = cloneDeep(state.quiz.sections);
      sections[state.currentSectionIndex].questions = questions;

      return {
        ...state,
        quiz: {
          ...state.quiz,
          sections: sections,
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

    case QuizActions.SECTION_SET_INDEX: {
      return {
        ...state,
        currentSectionIndex: action.payload,
      };
    }

    case QuizActions.QUESTION_SET_INDEX: {
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    }

    case QuizActions.QUESTION_BOOKMARK_TOGGLE: {
      const questions = [
        ...state.quiz.sections[state.currentSectionIndex].questions,
      ];
      const currentQuestion = { ...questions[state.currentQuestionIndex] };
      currentQuestion.isBookmarked = !currentQuestion.isBookmarked;

      questions[state.currentQuestionIndex] = currentQuestion;

      const sections = cloneDeep(state.quiz.sections);
      sections[state.currentSectionIndex].questions = questions;

      return {
        ...state,
        quiz: {
          ...state.quiz,
          sections: sections,
        },
      };
    }

    default: {
      return state;
    }
  }
}

export const selectState = createFeatureSelector<State>(QuizFeatureToken);

export const selectQuizState = createSelector(selectState, (state: State) => {
  return state.quiz;
});

export const selectQuestionsState = createSelector(
  selectState,
  (state: State) => {
    return state.quiz.sections[state.currentSectionIndex].questions;
  }
);

export const selectCurrentQuestion = createSelector(
  selectState,
  (state: State) => {
    return state.loaded
      ? {
          ...state.quiz.sections[state.currentSectionIndex].questions[
            state.currentQuestionIndex
          ],
          index: state.currentQuestionIndex + 1,
          isFirst: state.currentQuestionIndex == 0,
          isLast:
            state.currentQuestionIndex ==
            state.quiz.sections[state.currentSectionIndex].questions.length - 1,
        }
      : ({} as Question);
  }
);

export const selectIsLastQuestion = createSelector(
  selectCurrentQuestion,
  (question: Question) => {
    return question.isLast;
  }
);

export const selectSectionProgress = createSelector(
  selectState,
  (state: State) => {
    return state.loaded
      ? state.quiz.sections[state.currentSectionIndex].questions.filter(
          (qstn) => qstn.isAnswered === true
        ).length /
          state.quiz.sections[state.currentSectionIndex].questions.length
      : 0;
  }
);

// export const selectScoreDetails = createSelector(
//   selectQuizState,
//   (state: State) => state.answers
// );

export const selectQuizInstructions = createSelector(
  selectState,
  (state: State) => state.quiz.instruction
);

export const selectIsQuizLoaded = createSelector(
  selectState,
  (state: State) => state.loaded
);

export const selectCanSkipQuestionsAbiity = createSelector(
  selectState,
  (state: State) =>
    state.loaded
      ? state.quiz.sections[state.currentSectionIndex].canSkipQuestions
      : false
);

export const selectQuizDetails = createSelector(selectState, (state: State) => {
  return (state.loaded
    ? {
        title: state.quiz.title,
        subtitle: state.quiz.subtitle,
        timer: state.quiz.timer,
        details: state.quiz.details,
        sections: state.quiz.sections,
      }
    : {}) as Quiz;
});

// export const selectScore = createSelector(
//   selectQuizState,
//   (state: State) =>
//     state.answers
//       .map((answer) => answer.answerIndex)
//       .filter((index) => index === 0).length
// );
