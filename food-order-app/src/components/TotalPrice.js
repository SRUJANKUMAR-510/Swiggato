import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../features/meals/mealsSelectors';

const TotalPrice = () => {
  const totalPrice = useSelector(selectTotalPrice);

  return <div>Total Price: ${totalPrice.toFixed(2)}</div>;
};

export default TotalPrice;
