import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LeaderState {
  leader: string | undefined;
}

const initialState: LeaderState = {
  leader: ''
};

export const leaderSlice = createSlice({
  name: 'leader',
  initialState,
  reducers: {
    setLeader: (state, action: PayloadAction<string>) => {
      state.leader = action.payload;
    }
  }
});

export const selectLeader = (state: RootState) => state.leader;

export const { setLeader } = leaderSlice.actions;
export default leaderSlice.reducer;
