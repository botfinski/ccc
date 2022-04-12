import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type JourneyTypeTypes = 'hunt' | 'scavenge' | 'deliverance' | 'decapitation';

export enum JourneyTypes {
  HUNT = 'hunt',
  SCAVENGE = 'scavenge',
  DELIVERANCE = 'deliverance',
  DECAPITATION = 'decapitation'
}

export interface JourneyTypeState {
  journeyType: JourneyTypeTypes | string;
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
