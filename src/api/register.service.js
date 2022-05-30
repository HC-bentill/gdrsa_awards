import { dispatch, receive, mutate, remove } from "./api.service";

const base = "Customers/Form";

export const getAllForms = (queryUrl) =>
  queryUrl ? receive(`/${base}/${queryUrl}`) : receive(`/${base}/`);
export const getFormById = (id) => receive(`/${base}/${id}`);
export const createForm = (data) => dispatch(data, `/${base}/`);
export const updateFormById = (data, id) => mutate(data, `/${base}/`);
export const deleteFormById = (id) => remove(`/${base}/${id}`);

export const requestOTP = (data) => dispatch(data, `/auth/request-otp/`)
export const verifyOTP = (data) => dispatch(data, `/auth/verify-otp/`)


