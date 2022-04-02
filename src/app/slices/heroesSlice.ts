import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SaveData } from '../saveData';

export const Heroes = SaveData.heroes

export interface HeroesState {
  selectedHeroes: string[];
  initiativeTokens: boolean;
}

const initialState: HeroesState = {
  selectedHeroes: [],
  initiativeTokens: false
};

export const heroesSlice = createSlice({
  name: 'selectedHeroes',
  initialState,
  reducers: {
    setSelectedHeroes: (state, action: PayloadAction<string[]>) => {
      state.selectedHeroes = action.payload;
    },
    setInitiativeTokens: (state, action: PayloadAction<boolean>) => {
      state.initiativeTokens = action.payload;
    }
  }
});

export const selectHeroes = (state: RootState) => state.selectedHeroes;

export const { setSelectedHeroes, setInitiativeTokens } = heroesSlice.actions;
export default heroesSlice.reducer;
