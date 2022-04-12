import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type MapDataTypes = 'hunt' | 'scavenge' | 'decapitation'

export interface MapState {
  map: string;
}

const initialState: MapState = {
  map: ''
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<string>) => {
      state.map = action.payload;
    }
  }
})

export const selectMap = (state: RootState) => state.map;

export const { setMap } = mapSlice.actions;
export default mapSlice.reducer;
