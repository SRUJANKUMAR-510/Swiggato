import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features/meals/mealsReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
