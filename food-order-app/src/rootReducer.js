import { combineReducers } from 'redux';
import mealsReducer from './features/meals/mealsSlice';
import authReducer from './features/auth/authSlice';

const rootReducer = combineReducers({
  meals: mealsReducer,
  auth: authReducer,
});

export default rootReducer;
