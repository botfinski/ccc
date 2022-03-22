import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface PlayersState {
  player1: string;
  player2?: string;
  player3?: string;
  player4?: string;
}

const initialState: PlayersState = {
  player1: '',
  player2: '',
  player3: '',
  player4: ''
};


export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    changeInput1: (state, action: PayloadAction<string>) => {
      state.player1 = action.payload;
    },
    changeInput2: (state, action: PayloadAction<string>) => {
      state.player2 = action.payload;
    },
    changeInput3: (state, action: PayloadAction<string>) => {
      state.player3 = action.payload;
    },
    changeInput4: (state, action: PayloadAction<string>) => {
      state.player4 = action.payload;
    },
  }
});

export const selectPlayers = (state: RootState) => state.players;

export const { changeInput1, changeInput2, changeInput3, changeInput4 } = playersSlice.actions;
export default playersSlice.reducer;