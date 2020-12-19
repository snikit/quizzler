import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Details, Question, Quiz } from 'src/app/@data/model/quiz.model';
import { Section } from './../../@data/model/quiz.model';
import * as QuizActions from './quiz.actions';

export const QuizFeatureToken = 'quiz';

export interface Store {
  quiz: State;
}

export interface State {
  loaded: boolean;
  loading: boolean;
  quiz: Quiz;
  currentQuestionIndex: number;
  currentSectionIndex: number;
}

const initialState: State = {
  loaded: false,
  loading: false,
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
      const currentQuestion = {
        ...questions[state.currentQuestionIndex],
        isAnswered: true,
        userAnswer: action.payload,
      };

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

    case QuizActions.MAKE_QUIZ_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }

    case QuizActions.MAKE_QUIZ_PROGRESS_ON_SECTION: {
      return {
        ...state,
        loading: false,
        currentSectionIndex: state.currentSectionIndex + 1,
        currentQuestionIndex: 0,
      };
    }

    case QuizActions.MAKE_QUIZ_PROGRESS_ON_SCORE: {
      return {
        ...state,
      };
    }

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

    case QuizActions.POST_ANSWER_RESULT: {
      const stateQuiz = cloneDeep(state.quiz);

      const currentQuestion =
        stateQuiz.sections[action.sectionIndex].questions[action.questionIndex];

      currentQuestion.isPosted = action.isSuccess;

      return {
        ...state,
        quiz: stateQuiz,
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

export const selectQuestionsState = createSelector(
  selectState,
  (state: State) => {
    return state.loaded
      ? state.quiz.sections[state.currentSectionIndex].questions
      : [];
  }
);

export const selectQuestion = createSelector(
  selectState,
  (
    state: State,
    props: {
      questionIndex: number;
      sectionIndex: number;
    }
  ) => {
    if (!state.loaded) {
      return null;
    }

    return {
      ...state.quiz.sections[props.sectionIndex].questions[props.questionIndex],
      index: props.questionIndex,
      sectionIndex: props.sectionIndex,
    };
  }
);

export const selectCurrentQuestion = createSelector(
  selectState,
  selectQuestionsState,
  (state: State, questions: Question[]) => {
    return {
      ...questions[state.currentQuestionIndex],
      index: state.currentQuestionIndex,
      sectionIndex: state.currentSectionIndex,
      isFirst: state.currentQuestionIndex == 0,
      isLast: state.currentQuestionIndex == questions.length - 1,
    };
  }
);

export const selectIsLastQuestion = createSelector(
  selectCurrentQuestion,
  (question: Question) => {
    return question.isLast;
  }
);

export const selectIsLastQuestionAnswered = createSelector(
  selectCurrentQuestion,
  (question: Question) => {
    return question.isLast && question.isAnswered;
  }
);

export const selectSectionProgress = createSelector(
  selectQuestionsState,
  (questions: Question[]) => {
    return (
      questions.filter((qstn) => qstn.isAnswered === true).length /
      questions.length
    );
  }
);

export const selectQuizState = createSelector(selectState, (state: State) => {
  return state.loaded ? state.quiz : {};
});

export const selectQuizInstructions = createSelector(
  selectQuizState,
  (quiz: Quiz) => quiz.instruction
);

// quiz -----

export const selectIsQuizLoaded = createSelector(
  selectState,
  (state: State) => state.loaded
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

// section -----

export const selectCurrentSectionIndex = createSelector(
  selectState,
  (state: State) => state.currentSectionIndex
);

export const selectSectionByIndex = createSelector(
  selectIsQuizLoaded,
  selectQuizState,
  (
    loaded: boolean,
    quiz: Quiz,
    props: {
      sectionIndex: number;
    }
  ) => (loaded ? quiz.sections[props.sectionIndex] : {})
);

export const selectCurrentSection = createSelector(
  selectIsQuizLoaded,
  selectQuizState,
  selectCurrentSectionIndex,
  (loaded: boolean, quiz: Quiz, currentSectionIndex: number) =>
    loaded ? quiz.sections[currentSectionIndex] : {}
);

export const selectSectionDetails = createSelector(
  selectCurrentSection,
  (section: Section) => {
    const { title, subtitle, timer } = section;
    return { title, subtitle } as Section;
  }
);

// abilities -----

export const selectCanSkipQuestionsAbiity = createSelector(
  selectCurrentSection,
  (section: Section) => section.canSkipQuestions
);
