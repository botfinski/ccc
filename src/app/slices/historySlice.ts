import { 
  createSlice, 
  // PayloadAction 
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { SaveData } from '../../app/saveData';

const History = SaveData.history

export interface HistoryState {
  history: {
    type: string;
    map: string;
    count: number;
    extractionEvent: number;
  }[]
}

const initialState: HistoryState = {
  history: History
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    // setHistory: (state, action: PayloadAction<string>) => {
    //   state.history = action.payload;
    // }
  }
});

export const selectHistory = (state: RootState) => state.history;

// export const { setHistory } = historySlice.actions;
export default historySlice.reducer;
