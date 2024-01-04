import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPeople, setPerson } from '../features/meals/mealsSlice';

const PersonList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);

  const handleSelectPerson = (personId) => {
    dispatch(setPerson(personId));
  };

  return (
    <div>
      <p>Select a Person:</p>
      <select onChange={(e) => handleSelectPerson(e.target.value)}>
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PersonList;
