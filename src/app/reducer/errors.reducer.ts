import { Action, createReducer, on } from "@ngrx/store"
import * as actions from '../actions/app.action'

export interface ErrorState {
  message: string,
  feature: string,
  hasError: boolean
}

const initialState: ErrorState = {
  message: null,
  feature: null,
  hasError: false
}

const myReducer = createReducer(
  initialState,
  on(actions.applicationError, (s, a) => ({
    hasError: true,
    message: `Feature ${a.feature} had an error: ${a.error}`,
    feature: a.feature
  })),
  on(actions.applicationErrorCleared, () => initialState)
);

export function reducer(state: ErrorState, action: Action): ErrorState {
  return myReducer(state, action);
}
