import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SetupState {
  skyVessel: boolean
  discoveryDeck: boolean
  combatMap: boolean
  encounterCards: boolean
}

const initialState: SetupState = {
  skyVessel: false,
  discoveryDeck: false,
  combatMap: false,
  encounterCards: false
};

export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    setSkyVessel: (state, action: PayloadAction<boolean>) => {
      state.skyVessel = action.payload;
    },
    setSkyDiscoveryDeck: (state, action: PayloadAction<boolean>) => {
      state.discoveryDeck = action.payload;
    },
    setCombatMap: (state, action: PayloadAction<boolean>) => {
      state.combatMap = action.payload;
    },
    setEncounterCards: (state, action: PayloadAction<boolean>) => {
      state.encounterCards = action.payload;
    }
  }
});

export const selectSetup = (state: RootState) => state.setup;

export const { setSkyVessel, setSkyDiscoveryDeck, setCombatMap, setEncounterCards } = setupSlice.actions;
export default setupSlice.reducer;
