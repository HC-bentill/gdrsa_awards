import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizData: {},
    submitQuiz: {},
    quizResult:{},
  },
  reducers: {
    setQuizData: (state, action) => {
      state.quizData = action.payload;
    },
    setSubmitQuiz: (state, action) => {
      let newAnswers = {
        ...state.submitQuiz,
    }
    newAnswers[action.payload['questionId']] = action.payload['choiceid']
    state.submitQuiz = newAnswers
    console.log('newAnswers =', newAnswers)
    },
    setQuizResult: (state, action) => {
      state.quizResult = action.payload;
    },
    setQuizDataNull: (state) => {
      state.quizResult = {};
      state.submitQuiz = {};
    },
  },
});

export const { setQuizData, setQuizNull, setSubmitQuiz, setQuizResult, setQuizDataNull } = quizSlice.actions;

export const selectQuizData = (state) => state.quiz.quizData;

export const selectSubmitQuiz = (state) => state.quiz.submitQuiz;

export const selectQuizResult = (state) => state.quiz.quizResult;


export default quizSlice.reducer;
