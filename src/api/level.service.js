import { dispatch, receive, mutate, remove } from "./api.service";

const base = "levels";

export const getLevels = () => receive(`/${base}`)
export const getQuiz = (id) => receive(`/${base}/quizzes/${id}`)
export const postQuiz = (data) => dispatch(data, `/${base}/quizzes/submit`)
