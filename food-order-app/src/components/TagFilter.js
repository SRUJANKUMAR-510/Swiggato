import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTags, setTagFilter } from '../features/meals/mealsSlice';

const TagFilter = () => {
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);

  const handleSelectTag = (tag) => {
    dispatch(setTagFilter(tag));
  };

  return (
    <div>
      <p>Filter by Tag:</p>
      <select onChange={(e) => handleSelectTag(e.target.value)}>
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagFilter;
