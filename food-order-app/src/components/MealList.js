import React from 'react';
import { useSelector } from 'react-redux';
import MealCard from './MealCard';
import { selectFilteredMeals } from '../features/meals/mealsSelectors';
import useStyles from '../styles';

const MealList = ({ onSelectMeal }) => {
    const classes = useStyles();
    const meals = useSelector(selectFilteredMeals);

  return (
    <div>
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} onSelectMeal={onSelectMeal} />
      ))}
    </div>
  );
};

export default MealList;
