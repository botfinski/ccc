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
    setPlayers: (state, action: PayloadAction<PlayersState>) => {
      state.player1 = action.payload.player1
      state.player2 = action.payload.player2
      state.player3 = action.payload.player3
      state.player4 = action.payload.player4
    }
  }
});

export const selectPlayers = (state: RootState) => state.players;

export const selectPickedPlayers = (state: RootState) => Object.fromEntries(Object.entries(state.players).filter(([key, value]) => value !== ''));

export const { setPlayers } = playersSlice.actions;
export default playersSlice.reducer;
