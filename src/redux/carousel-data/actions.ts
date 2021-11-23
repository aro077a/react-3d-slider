import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { responseBody } from './model';

import axios from 'axios';
import {
  fetchMockDataFailure,
  fetchMockDataStart,
  fetchMockDataSuccess,
} from './actionTypes';

export const fetchWaiverData = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchMockDataStart());
      const mockDataResponse: typeof responseBody = await axios.get(
        'Here need to be URL'
      );
      dispatch(fetchMockDataSuccess(mockDataResponse));
    } catch (error) {
      dispatch(fetchMockDataFailure());
    }
  };
};
