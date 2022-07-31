import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizData: {},
    submitQuiz: {},
    quizResult: {},
    quizQuestions: {},
    quizSession: false,
  },
  reducers: {
    setQuizData: (state, action) => {
      state.quizData = action.payload;
    },
    setSubmitQuiz: (state, action) => {
      let newAnswers = {
        ...state.submitQuiz,
      };
      newAnswers[action.payload["questionId"]] = action.payload["choiceid"];
      state.submitQuiz = newAnswers;
    },
    setQuizResult: (state, action) => {
      state.quizResult = action.payload;
    },
    setQuizDataNull: (state) => {
      state.submitQuiz = {};
      state.quizData = {};
      state.quizQuestions= {};
      state.quizSession= false;
    },
    setQuizQuestions: (state, action) => {
      state.quizQuestions = action.payload;
    },
    setQuizSession: (state, action) => {
      state.quizSession = action.payload;
    },
  },
});

export const {
  setQuizData,
  setSubmitQuiz,
  setQuizResult,
  setQuizDataNull,
  setQuizQuestions,
  setQuizSession
} = quizSlice.actions;

export const selectQuizData = (state) => state.quiz.quizData;

export const selectSubmitQuiz = (state) => state.quiz.submitQuiz;

export const selectQuizResult = (state) => state.quiz.quizResult;

export const selectQuizQuestions = (state) => state.quiz.quizQuestions;

export const selectQuizSession = (state) => state.quiz.quizSession;


export default quizSlice.reducer;
