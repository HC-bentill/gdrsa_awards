import { dispatch, receive, mutate, remove } from "./api.service";

export const requestOTP = (data) => dispatch(data, `/auth/request-otp/register`)
export const verifyOTP = (data) => dispatch(data, `/auth/verify-otp/register`)
export const resendOTP = (data) => dispatch(data, `auth/request-otp/register`)

export const signinRequestOTP = (data) => dispatch(data, `auth/request-otp/signin`)
export const signinverifyOTP = (data) => dispatch(data, `auth/verify-otp/signin`)
export const signinResendOTP= (data) => dispatch(data, `auth/request-otp/signin`)
export const signin= (data) => dispatch(data, `auth/signin`)

export const registerUser = (data) => dispatch(data, `/auth/register`)

export const whoAmI = () => receive(`/user/who-am-i`)


