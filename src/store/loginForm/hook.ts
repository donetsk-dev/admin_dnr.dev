import { shallowEqual } from "react-redux"
import { RootState, useAppDispatch, useAppSelector } from "~/store"
import { LoginForm, loginFormSlice, submit } from "./slice"

const loginFormState = (state: RootState) => ({ ...state.loginForm })

export function useLoginForm() {
  const loginForm = useAppSelector(loginFormState, shallowEqual)
  const dispatch = useAppDispatch()

  return {
    ...loginForm,
    changeForm(data: Partial<LoginForm>) {
      dispatch(loginFormSlice.actions.changeForm(data))
    },
    submit() {
      dispatch(submit())
    }
  }
}
