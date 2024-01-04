import React from 'react';

const DrinkSelector = ({ drinks, onSelectDrink }) => {
  return (
    <div>
      <p>Select a Drink:</p>
      <select onChange={(e) => onSelectDrink(e.target.value)}>
        <option value="">None</option>
        {drinks.map((drink) => (
          <option key={drink} value={drink}>
            {drink}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DrinkSelector;
