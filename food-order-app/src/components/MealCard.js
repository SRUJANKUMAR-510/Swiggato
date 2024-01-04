import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DrinkSelector from './DrinkSelector';
import { selectMeals } from '../features/meals/mealsSlice';

const MealCard = ({ meal, onSelectMeal }) => {
  const dispatch = useDispatch();
  const [selectedDrink, setSelectedDrink] = useState('');

  const handleDrinkSelection = (drink) => {
    setSelectedDrink(drink);
  };

  const handleAddToCart = () => {
    dispatch(selectMeals({ ...meal, selectedDrink }));
    onSelectMeal();
  };

  return (
    <div>
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
      <img src={meal.image} alt={meal.name} />
      <DrinkSelector drinks={meal.drinks} onSelectDrink={handleDrinkSelection} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MealCard;
