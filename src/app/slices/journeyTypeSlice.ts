import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type JourneyTypeTypes = 'hunt' | 'scavenge' | 'deliverance' | 'decapitation';

export const JourneyTypes = ['hunt', 'scavenge', 'deliverance', 'decapitation']

export interface JourneyTypeState {
  journeyType: JourneyTypeTypes | string | undefined;
}

const initialState: JourneyTypeState = {
  journeyType: ''
};

export const JourneyTypeSlice = createSlice({
  name: 'journeyType',
  initialState,
  reducers: {
    setJourneyType: (state, action: PayloadAction<JourneyTypeTypes | string>) => {
      state.journeyType = action.payload;
    }
  }
});

export const selectJourneyType = (state: RootState) => state.journeyType;

export const { setJourneyType } = JourneyTypeSlice.actions;
export default JourneyTypeSlice.reducer;
