import { createSlice } from '@reduxjs/toolkit';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    selectedMeals: [],
    selectedTag: '',
    selectedPerson: '',
  },
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    selectMeals: (state, action) => {
      state.selectedMeals.push({ ...action.payload, personId: state.selectedPerson });
    },
    setTagFilter: (state, action) => {
      state.selectedTag = action.payload;
    },
    setPerson: (state, action) => {
      state.selectedPerson = action.payload;
    },
  },
});

export const { setMeals, selectMeals, setTagFilter, setPerson } = mealsSlice.actions;
export const selectMealsState = (state) => state.meals;
export const selectFilteredMeals = (state) => {
  const { meals, selectedTag } = state.meals;
  return selectedTag ? meals.filter((meal) => meal.tags.includes(selectedTag)) : meals;
};
export const selectTags = (state) => {
  const { meals } = state.meals;
  const tagsSet = new Set();
  meals.forEach((meal) => meal.tags.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet);
};
export const selectPeople = (state) => state.meals.selectedPerson;
export const selectTotalPrice = (state) => {
  const { selectedMeals } = state.meals;
  return selectedMeals.reduce((total, meal) => total + meal.price, 0);
};

export default mealsSlice.reducer;
