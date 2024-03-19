import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setFilter } from './filterSlice';

const Filter = () => {
  const filter = useAppSelector((state) => state.filter.productName);
  const dispatch = useAppDispatch();

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      onChange={handleInputOnChange}
      value={filter}
      placeholder="Filter by name"
      type="text"
    />
  );
};

export default Filter;
