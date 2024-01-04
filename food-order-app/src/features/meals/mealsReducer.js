import { combineReducers } from 'redux';
import mealsReducer from './mealsSlice';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export default rootReducer;
