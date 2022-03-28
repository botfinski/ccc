import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const Heroes = ['jelsen', 'glaurio', 'cleona', 'brutogg', 'qulathis', 'emelda', 'dagnai', 'octren']

export interface HeroesState {
  heroes: string[];
}

const initialState: HeroesState = {
  heroes: []
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    setHeroes: (state, action: PayloadAction<string[]>) => {
      state.heroes = action.payload;
    }
  }
});

export const selectHeroes = (state: RootState) => state.heroes;

export const { setHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;
