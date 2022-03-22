import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rulesetSlice from './slices/rulesetSlice';
import playersReducer from './slices/playersSlice';

export const store = configureStore({
  reducer: {
    ruleset: rulesetSlice,
    players: playersReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
