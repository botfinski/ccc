import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type QuestCardState = {
  fear: number;
  influence: number;
  gravestones: string[]
}
const initialState: QuestCardState = {
  fear: 5, 
  influence: 6,
  gravestones: []
};

export const QuestCardSlice = createSlice({
  name: 'questCard',
  initialState,
  reducers: {
    setFear: (state, action: PayloadAction<number>) => {
      state.fear = action.payload;
    },
    setInfluence: (state, action: PayloadAction<number>) => {
      state.influence = action.payload;
    }
  }
})

export const selectQuestCard = (state: RootState) => state.questCard

export const { setFear, setInfluence } = QuestCardSlice.actions;
export default QuestCardSlice.reducer;
