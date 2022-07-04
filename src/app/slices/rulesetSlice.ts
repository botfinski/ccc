import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type RulesetTypes = 'default' | 'hard' | 'the beast returns';

export const Rulesets = ['default', 'hard', 'the beast returns']

export interface RulesetState {
  ruleset: RulesetTypes | string;
}

const initialState: RulesetState = {
  ruleset: 'default'
};

export const rulesetSlice = createSlice({
  name: 'ruleset',
  initialState,
  reducers: {
    setRuleset: (state, action: PayloadAction<RulesetTypes | string>) => {
      state.ruleset = action.payload;
    }
  }
});

export const selectRuleset = (state: RootState) => state.ruleset;

export const { setRuleset } = rulesetSlice.actions;
export default rulesetSlice.reducer;
