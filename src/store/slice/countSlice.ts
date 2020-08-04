import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mutateStateWithPayload } from 'src/store/utils';

export declare namespace CountStore {
  interface State {
    count: number;
  }

  interface Action {
    changeCount: {
      count: number;
    };
  }
}
const initialState: CountStore.State = {
  count: 0,
};
export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setFeedback(state, action: PayloadAction<CountStore.Action['changeCount']>) {
      // mutateStateWithPayload(state, action.payload);
      state.count++;
      // Object.entries(action.payload).forEach(([k, v]) => {
      //   state[k] = v;
      // });
    },
  },
});
