import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.action'

export interface CounterState {
  current: number;
  by: number
}

const initialState: CounterState = {
  current: 0,
  by: 1
}

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (s, a) => ({ ...s, current: s.current }))
)

// reducer(currentState, action) => newState
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  //this must be a PURE function
  //cannot change arguments in any way
  //can only produce a new value
  //cannot do 'side effects'
  //  -calling apis, changing a route, updating some other data, etc

  return myReducer(state, action);
}
