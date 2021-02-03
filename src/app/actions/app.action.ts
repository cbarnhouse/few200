import { createAction, props } from '@ngrx/store';

export const applicationStarted = createAction(
  '[app] APPLICATION_STARTED'
)

export const applicationError = createAction(
  '[app] application error',
  props<{ feature: string, error: string }>()
);

export const applicationErrorCleared = createAction(
  '[app] application error cleared'
);
