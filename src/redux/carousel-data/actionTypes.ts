import { ResponseType } from './model';

export const FETCH_MOCKUP_DATA_START = 'FETCH_MOCKUP_DATA_START';
export const FETCH_MOCKUP_DATA_SUCCESS = 'FETCH_MOCKUP_DATA_SUCCESS';
export const FETCH_MOCKUP_DATA_FAILURE = 'FETCH_MOCKUP_DATA_FAILURE';

export interface FetchMockDataStart {
  type: typeof FETCH_MOCKUP_DATA_START;
}
export interface FetchMockDataSuccess {
  type: typeof FETCH_MOCKUP_DATA_SUCCESS;
  payload: ResponseType;
}

export interface FetchMockDataFailure {
  type: typeof FETCH_MOCKUP_DATA_FAILURE;
}

export const fetchMockDataStart = (): FetchMockDataStart => {
  return { type: 'FETCH_MOCKUP_DATA_START' };
};

export const fetchMockDataSuccess = (
  payload: ResponseType
): FetchMockDataSuccess => {
  return { type: 'FETCH_MOCKUP_DATA_SUCCESS', payload };
};

export const fetchMockDataFailure = (): FetchMockDataFailure => {
  return { type: 'FETCH_MOCKUP_DATA_FAILURE' };
};

export type FetchDataActionTypes =
  | FetchMockDataStart
  | FetchMockDataSuccess
  | FetchMockDataFailure;
