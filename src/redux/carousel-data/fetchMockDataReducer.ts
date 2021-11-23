import { Reducer } from 'redux';
import {
  FetchDataActionTypes,
  FETCH_MOCKUP_DATA_START,
  FETCH_MOCKUP_DATA_SUCCESS,
  FETCH_MOCKUP_DATA_FAILURE,
} from './actionTypes';

export interface State {}

export const initialState: State = {
  mockData: [],
};

export const fetchMockDataReducer: Reducer = (
  state: State = initialState,
  action: FetchDataActionTypes
) => {
  switch (action.type) {
    case FETCH_MOCKUP_DATA_START:
      return {
        isLoading: true,
      };
    case FETCH_MOCKUP_DATA_SUCCESS:
      return {
        ...state,
        waivers: action.payload,
        isLoading: false,
      };
    case FETCH_MOCKUP_DATA_FAILURE:
      return {
        isLoading: true,
      };

    default:
      return state;
  }
};
