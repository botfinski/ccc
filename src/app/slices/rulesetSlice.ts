import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface rulesetState {
  ruleset: string;
}

const initialState: rulesetState = {
  ruleset: 'default'
};

export const rulesetSlice = createSlice({
  name: 'ruleset',
  initialState,
  reducers: {
    setRuleset: (state, action: PayloadAction<string>) => {
      state.ruleset = action.payload;
    }
  }
});

export const selectRuleset = (state: RootState) => state.ruleset;

export const { setRuleset } = rulesetSlice.actions;
export default rulesetSlice.reducer;
