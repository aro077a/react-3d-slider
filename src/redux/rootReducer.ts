import { combineReducers } from 'redux';
import * as mockData from './carousel-data/fetchMockDataReducer';
import { fetchMockDataReducer } from './carousel-data/fetchMockDataReducer';

export interface CombinedState {
  mockData: mockData.State;
}
const rootReducer = combineReducers({
  mockData: fetchMockDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
