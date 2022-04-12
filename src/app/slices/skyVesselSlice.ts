import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type SkyVesselState = {
  nightfallToken: number;
  questToken: number;
}

const initialState: SkyVesselState = {
  nightfallToken: 0,
  questToken: 0
};

export const skyVesselSlice = createSlice({
  name: 'skyVessel',
  initialState,
  reducers: {
    setNightfallToken: (state, action: PayloadAction<number>) => {
      state.nightfallToken = action.payload;
    },
    setQuestToken: (state, action: PayloadAction<number>) => {
      state.questToken = action.payload;
    }
  }
})

export const selectSkyVessel = (state: RootState) => state.skyVessel

export const { setNightfallToken, setQuestToken } = skyVesselSlice.actions;
export default skyVesselSlice.reducer;
