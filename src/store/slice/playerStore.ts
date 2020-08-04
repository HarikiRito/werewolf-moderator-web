import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mutateStateWithPayload } from 'src/store/utils';

export declare namespace PlayerStore {
  interface State {
    players: [];
  }

  interface Action {
    addPlayer: {
      count: number;
    };
  }
}
const initialState: PlayerStore.State = {
  players: [],
};
export const countSlice = createSlice({
  name: 'playerStore',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<PlayerStore.Action['addPlayer']>) {
      // mutateStateWithPayload(state, action.payload);
      // Object.entries(action.payload).forEach(([k, v]) => {
      //   state[k] = v;
      // });
    },
  },
});
