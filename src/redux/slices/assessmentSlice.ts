// import {
//   ISurveyAnswer,
//   ISurveyQuestion
// } from "@interfaces/assessment";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// export interface AssessmentState {
//   surveyId: number | null;
//   questions: ISurveyQuestion[];
//   selectedQuestion: ISurveyQuestion | null;
//   answers: ISurveyAnswer[];
//   passingGrade: number;
//   myGrade: number;
//   assessmentStarted: boolean;
//   assessmentName: string | null;
//   assessmentCertified: boolean;
//   surveyDuration: number | null;
//   jobId: string | null;
//   applicantId: string | null;
//   isRecruitment: boolean;
// }

// const initialState: AssessmentState = {
//   surveyId: null,
//   questions: [],
//   answers: [],
//   selectedQuestion: null,
//   passingGrade: 0,
//   myGrade: 0,
//   assessmentStarted: false,
//   assessmentName: null,
//   assessmentCertified: false,
//   surveyDuration: null,
//   jobId: null,
//   applicantId: null,
//   isRecruitment: false,
// };

// export const assessmentSlice = createSlice({
//   name: "assessment",
//   initialState,
//   reducers: {
//     setSurveyId: (state, action: PayloadAction<number>) => {
//       state.surveyId = action.payload;
//     },
//     setAssessmentStarted: (state, action: PayloadAction<boolean>) => {
//       state.assessmentStarted = action.payload;
//     },
//     setPassingGrade: (state, action: PayloadAction<number>) => {
//       state.passingGrade = action.payload;
//     },
//     setGrade: (state, action: PayloadAction<number>) => {
//       state.myGrade = action.payload;
//     },
//     addQuestions: (state, action: PayloadAction<ISurveyQuestion[]>) => {
//       state.questions = action.payload;
//     },
//     addAnswer: (state, action: PayloadAction<ISurveyAnswer>) => {
//       state.answers.push(action.payload);
//     },
//     selectQuestion: (state, action: PayloadAction<ISurveyQuestion>) => {
//       state.selectedQuestion = action.payload;
//     },
//     setSurveyDuration: (state, action: PayloadAction<number>) => {
//       state.surveyDuration = action.payload;
//     },
//     setAssessmentName: (state, action: PayloadAction<string>) => {
//       state.assessmentName = action.payload;
//     },
//     setAssessmentCertified: (state, action: PayloadAction<boolean>) => {
//       state.assessmentCertified = action.payload;
//     },
//     setJobId: (state, action: PayloadAction<string | any>) => {
//       state.jobId = action.payload;
//     },
//     setApplicantId: (state, action: PayloadAction<string | any>) => {
//       state.applicantId = action.payload;
//     },
//     setIsRecruitment: (state, action: PayloadAction<boolean>) => {
//       state.isRecruitment = action.payload;
//     },
//     resetAssessment: (state) => {
//       state.questions = [];
//       state.answers = [];
//       state.selectedQuestion = null;
//       state.assessmentStarted = false;
//     },
//     reset: (state) => (state = initialState),
//   },
// });

// // Action creators are generated for each case reducer function
// export const {
//   addAnswer,
//   addQuestions,
//   selectQuestion,
//   reset,
//   setPassingGrade,
//   setGrade,
//   resetAssessment,
//   setAssessmentStarted,
//   setSurveyId,
//   setSurveyDuration,
//   setAssessmentName,
//   setAssessmentCertified,
//   setJobId,
//   setApplicantId,
//   setIsRecruitment,
// } = assessmentSlice.actions;

// export default assessmentSlice.reducer;

export const hey = "";
