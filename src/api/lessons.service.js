import { dispatch, receive, mutate, remove } from "./api.service";

const base = "lessons";

export const getLessons = (id) => receive(`levels/${base}/${id}`)
