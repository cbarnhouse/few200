import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};


// Selectors "Dux"

// 1. Feature Selector (if you are in a feature)

// 2. A selector per property on the state (per branch)
function selectCounterBranch(state: AppState): fromCounter.CounterState {
  return state.counter;
}
// 3. Any helpers you might need
// function selectCountCurrent(state: AppState): number {
//   return state.counter.current;
// }
const selectCountCurrent = createSelector(
  selectCounterBranch,
  c => c.current);
// 4. What the components need

// TODO: We need one that returns the current count for the counter

// export function getCurrentCount(state: AppState): number {
//   return state.counter.current;
// }

export const selectGetCurrentCount = createSelector(
  selectCountCurrent,
  c => c
);

export const selectCounterBy = createSelector(
  selectCounterBranch,
  b => b.by
);

// one says if the reset button should be disabled
// export function selectCounterResetDisabled(state: AppState): boolean {
//   return state.counter.current === 0;
// }
export const selectCounterResetDisabled = createSelector(
  selectCountCurrent,
  c => c === 0
);

// one says if the decrement button should be disabled
// export function selectCountDecrementDisabled(state: AppState): boolean {
//   return state.counter.current === 0;
// }
export const selectCountDecrementDisabled = createSelector(
  selectCountCurrent,
  selectCounterBy,
  (c, b) => (c - b) < 0
);


