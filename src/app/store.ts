import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rulesetSlice from './slices/rulesetSlice';
import playersReducer from './slices/playersSlice';
import leaderReducer from './slices/leaderSlice';
import journeyTypeSlice from './slices/journeyTypeSlice';

export const store = configureStore({
  reducer: {
    ruleset: rulesetSlice,
    players: playersReducer,
    leader: leaderReducer,
    journeyType: journeyTypeSlice
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
