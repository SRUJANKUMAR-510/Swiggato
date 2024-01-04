export const selectFilteredMeals = (state) => {
    const { meals, selectedTag } = state.meals;
    return selectedTag ? meals.filter((meal) => meal.tags.includes(selectedTag)) : meals;
  };
  