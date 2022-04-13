import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rulesetSlice from './slices/rulesetSlice';
import playersReducer from './slices/playersSlice';
import leaderReducer from './slices/leaderSlice';
import journeyTypeSlice from './slices/journeyTypeSlice';
import heroesSlice from './slices/heroesSlice';
import setupSlice from './slices/setupSlice';
import skyVesselSlice from './slices/skyVesselSlice';
import questCardSlice from './slices/questCardSlice';
import mapSlice from './slices/mapSlice';
import historySlice from './slices/historySlice';

export const store = configureStore({
  reducer: {
    ruleset: rulesetSlice,
    players: playersReducer,
    leader: leaderReducer,
    journeyType: journeyTypeSlice,
    selectedHeroes: heroesSlice,
    setup: setupSlice,
    skyVessel: skyVesselSlice,
    questCard: questCardSlice,
    map: mapSlice,
    history: historySlice
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
