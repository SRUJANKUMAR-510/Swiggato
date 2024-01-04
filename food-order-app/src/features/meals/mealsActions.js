import { setMeals } from './mealsSlice';
import mealsData from '../../data/mealsData';

export const fetchMeals = () => (dispatch) => {
  // Fetch meals from an API or use static data
  dispatch(setMeals(mealsData));
};
