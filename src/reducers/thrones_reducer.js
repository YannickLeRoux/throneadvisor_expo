import { FETCH_THRONES } from '../actions/types';

const INITIAL_STATE = [];

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_THRONES:
      console.log('reducer', action.payload);
      return action.payload;
    default:
      return state;
  }

}